import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to the database");
  } catch {
    console.log("Error connecting to the database");
  }
};

export default dbConnection;
