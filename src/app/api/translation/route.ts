import { saveTranslationHistory } from "@/config/db";
import { authOptions } from "@/lib/auth";
import geminiPro from "@/lib/gemini";
import { getServerSession } from "next-auth/next";
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
    console.log("Environment variables:", {
      hasGeminiKey: !!process.env.GEMINI_API_KEY,
      keyLength: process.env.GEMINI_API_KEY?.length,
    });

    const body: TranslationRequest = await request.json();
    const { text, sourceLanguage, targetLanguage } = body;

    if (!text || !targetLanguage) {
      return NextResponse.json(
        { error: "Text and target language are required" },
        { status: 400 }
      );
    }

    const prompt = `You are a professional translator. Translate the following text from ${sourceLanguage} to ${targetLanguage}. Only return the translated text without any explanations or quotes:\n\n${text}`;
    console.log("Prompt:", prompt);

    // Use Gemini model for translation
    const result = await geminiPro.generateContent(prompt);
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

    // Save translation history if user is authenticated
    const session = await getServerSession(authOptions);
    if (session?.user?.email) {
      await saveTranslationHistory({
        userId: session.user.email,
        sourceText: text,
        translatedText: translatedText || "",
        sourceLanguage,
        targetLanguage,
        timestamp: new Date(),
      });
    }

    return NextResponse.json({ translatedText });
  } catch (error) {
    console.error("Translation error:", error);
    return NextResponse.json(
      { error: "Translation failed: " + (error as Error).message },
      { status: 500 }
    );
  }
}
