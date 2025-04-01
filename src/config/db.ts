import clientPromise from "./mongodb";

interface TranslationHistory {
  userId: string;
  sourceText: string;
  translatedText: string;
  sourceLanguage: string;
  targetLanguage: string;
  timestamp: Date;
}

export async function saveTranslationHistory(translation: TranslationHistory) {
  const client = await clientPromise;
  const db = client.db("translator");

  await db.collection("translations").insertOne(translation);
}

export async function getTranslationHistory(userId: string) {
  const client = await clientPromise;
  const db = client.db("translator");

  return await db
    .collection("translations")
    .find({ userId })
    .sort({ timestamp: -1 })
    .toArray();
}
