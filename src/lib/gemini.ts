import { GoogleGenerativeAI } from "@google/generative-ai";

if (!process.env.GEMINI_API_KEY) {
  throw new Error("Missing GEMINI_API_KEY environment variable");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Export the model - Gemini Pro is good for text tasks like translation
const geminiPro = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default geminiPro;
