import { getGeminiApiKey } from "@/lib/cookies";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

interface TranslationRequest {
  text: string;
  sourceLanguage: string;
  targetLanguage: string;
}

console.log("Environment variables:", {
  hasGeminiKey: !!process.env.GEMINI_API_KEY,
  keyLength: process.env.GEMINI_API_KEY?.length,
});

export async function POST(request: Request) {
  try {
    // First try to get API key from environment variables
    let apiKey = process.env.GEMINI_API_KEY;

    // If not available, try to get from cookies (user input)
    if (!apiKey) {
      apiKey = await getGeminiApiKey();
      console.log("apiKey", apiKey);
    }

    // Check if we have an API key from either source
    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "Gemini API key not found. Please provide an API key in the settings.",
        },
        { status: 400 }
      );
    }

    console.log("Using API key:", {
      source: process.env.GEMINI_API_KEY ? "environment" : "user input",
      keyLength: apiKey.length,
    });

    const body: TranslationRequest = await request.json();
    const { text, sourceLanguage, targetLanguage } = body;

    if (!text || !targetLanguage) {
      return NextResponse.json(
        { error: "Text and target language are required" },
        { status: 400 }
      );
    }

    // Create a new Gemini client with the API key
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const prompt = `You are a professional translator. Translate the following text from ${sourceLanguage} to ${targetLanguage}. Only return the translated text without any explanations or quotes:\n\n${text}`;
    console.log("Prompt:", prompt);

    // Use Gemini model for translation
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const translatedText = response.text().trim();

    if (!translatedText) {
      throw new Error("No translation received from Gemini");
    }

    // Log for debugging
    console.log("Translation request:", {
      sourceText: text,
      sourceLanguage,
      targetLanguage,
      translatedText,
    });
    // Note: MongoDB history saving has been removed
    return NextResponse.json({ translatedText });
  } catch (error) {
    console.error("Translation error:", error);
    return NextResponse.json(
      { error: "Translation failed: " + (error as Error).message },
      { status: 500 }
    );
  }
}
