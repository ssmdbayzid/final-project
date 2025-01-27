import * as mongoose from "mongoose";

export const connectDb = async () => {
    try {
        if (mongoose.connection.readyState >= 1) {
            console.log("Database already connected");
            return;
        }

        const dbUrl = process.env.DB_URL;
        if (!dbUrl) {
            throw new Error("Database URL is not defined in environment variables");
        }

        console.log("Connecting to database:", dbUrl);
        await mongoose.connect(dbUrl);
        console.log("Database Connected");
    } catch (err) {
        console.error("Database connection error:", err);
    }
};
