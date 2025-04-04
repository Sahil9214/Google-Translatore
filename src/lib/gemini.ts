import { GoogleGenerativeAI } from "@google/generative-ai";

// Only throw error in production environment, not during build
const requireEnvVar = (name: string) => {
  if (!process.env[name] && process.env.NODE_ENV === "production") {
    throw new Error(`Missing ${name} environment variable`);
  }
  return process.env[name] || "dummy-key-for-build";
};

const apiKey = requireEnvVar("GEMINI_API_KEY");
const genAI = new GoogleGenerativeAI(apiKey);

// Export the model - Gemini Pro is good for text tasks like translation
const geminiPro = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default geminiPro;
