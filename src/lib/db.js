import { MongoClient, ServerApiVersion } from "mongodb";


export const collectionsName = {
    usersCollection: 'users',
    coursesCollection: 'courses', 
    templateCollection: 'templates',
    cartCollection: 'cart',
};

let db;

export default async function dbConnect(collectionName) {
    if (db) return db.collection(collectionName);
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
    
    if (!uri) {
        throw new Error("MONGODB_URI is not defined in .env.local");
    }

    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    try {
        await client.connect();
        db = client.db(process.env.DB_NAME);
        console.log("Successfully connected to MongoDB!");
        return db.collection(collectionName);
    } catch (error) {
        console.error("Database connection failed:", error);
        throw error;
    }
}