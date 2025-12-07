import mongoose from "mongoose";
import config from "./config.js";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.log("MongoDB connection error", err);
    });

    await mongoose.connect(config.MONGO_CONNECTION_STRING);
  } catch (error) {
    console.error("Failed to connect to database", error);
    process.exit(1);
  }
};

export default connectDB;