import { MongoClient } from "mongodb";

console.log(process.env.NEXT_PUBLIC_MONGODB_URI, process.env.NEXT_PUBLIC_MONGODB_DB);

let uri = process.env.NEXT_PUBLIC_MONGODB_URI;
let dbName = process.env.NEXT_PUBLIC_MONGODB_DB;

let cachedClient = null;
let cachedDb = null;

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

if (!dbName) {
  throw new Error("Please define the MONGODB_DB environment variable inside .env.local");
}

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = await client.db(dbName);
  cachedClient = client;
  cachedDb = db;
  return { client, db };
}