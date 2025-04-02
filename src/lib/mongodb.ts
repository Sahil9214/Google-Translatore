import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  console.warn("Missing MONGODB_URI environment variable");
}

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

try {
  if (process.env.NODE_ENV === "development") {
    const globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(uri, options);
      globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
  } else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }
} catch (error) {
  console.error("MongoDB connection error:", error);
  throw new Error("Failed to connect to MongoDB");
}

export default clientPromise;
