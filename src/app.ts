import express from "express";
import { getDBStatus } from "./config/db.js";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("Hello from server");
});

// Health check endpoint to check MongoDB connection status
app.get("/health", (req, res) => {
  const dbStatus = getDBStatus();
  res.status(dbStatus.isConnected ? 200 : 503).json({
    status: dbStatus.isConnected ? "healthy" : "unhealthy",
    server: "running",
    database: {
      status: dbStatus.status,
      connected: dbStatus.isConnected,
      connectionString: dbStatus.connectionString,
    },
    timestamp: new Date().toISOString(),
  });
});

export default app;
