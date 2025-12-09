import mongoose from "mongoose";
import config from "./config.js";

const connectDB = async () => {
  if (!config.MONGO_CONNECTION_STRING) {
    console.error(
      "MONGO_CONNECTION_STRING is not set. Please check your .env file."
    );
    throw new Error("MONGO_CONNECTION_STRING is required");
  }

  try {
    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB disconnected");
    });

    await mongoose.connect(config.MONGO_CONNECTION_STRING);
    console.log("MongoDB connection established");
  } catch (error) {
    console.error("Failed to connect to database:", error);
    // Don't exit process in development - allow server to start without DB
    if (process.env.NODE_ENV === "production") {
      process.exit(1);
    } else {
      console.warn(
        "Server will continue without database connection (development mode)"
      );
    }
  }
};

// Function to check MongoDB connection status
export const getDBStatus = () => {
  const connectionState = mongoose.connection.readyState;
  const states = {
    0: "disconnected",
    1: "connected",
    2: "connecting",
    3: "disconnecting",
  };

  return {
    status: states[connectionState as keyof typeof states] || "unknown",
    readyState: connectionState,
    isConnected: connectionState === 1,
    connectionString: config.MONGO_CONNECTION_STRING
      ? config.MONGO_CONNECTION_STRING.replace(
          /\/\/([^:]+):([^@]+)@/,
          "//***:***@"
        )
      : "not configured",
  };
};

export default connectDB;
