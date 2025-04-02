import clientPromise from "@/lib/mongodb";

interface TranslationHistory {
  userId: string;
  sourceText: string;
  translatedText: string;
  sourceLanguage: string;
  targetLanguage: string;
  timestamp: Date;
}

export async function saveTranslationHistory(translation: TranslationHistory) {
  try {
    const client = await clientPromise;
    const db = client.db("translator");
    await db.collection("translations").insertOne(translation);
    console.log("Translation saved to history");
  } catch (error) {
    console.error("Error saving translation history:", error);
  }
}

export async function getTranslationHistory(userId: string) {
  try {
    const client = await clientPromise;
    const db = client.db("translator");
    return await db
      .collection("translations")
      .find({ userId })
      .sort({ timestamp: -1 })
      .toArray();
  } catch (error) {
    console.error("Error getting translation history:", error);
    return [];
  }
}
