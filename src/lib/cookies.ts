"use server";
import { cookies } from "next/headers";

export async function getGeminiApiKey() {
  const cookieStore = await cookies();
  return cookieStore.get("gemini-api-key")?.value;
}

export async function setGeminiApiKey(apiKey: string) {
  const cookieStore = await cookies();
  cookieStore.set("gemini-api-key", apiKey, {
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
}
