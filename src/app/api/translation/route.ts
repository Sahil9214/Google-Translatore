import openai from "@/lib/openai";
import { NextResponse } from "next/server";

interface TranslationRequest {
  text: string;
  sourceLanguage: string;
  targetLanguage: string;
}

export async function POST(request: Request) {
  const body: TranslationRequest = await request.json();
  const { text, sourceLanguage, targetLanguage } = body;

  if (!text || !targetLanguage) {
    return NextResponse.json(
      { error: "Text and target language are required" },
      { status: 400 }
    );
  }

  try {
    const prompt = `Translate the following text from ${sourceLanguage} to ${targetLanguage}. Only return the translated text without any explanations:\n\n${text}`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3, // Lower temperature for more accurate translations
      max_tokens: 1000,
    });

    return NextResponse.json({
      translatedText: response.choices[0].message.content?.trim(),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Translation failed" }, { status: 500 });
  }
}
