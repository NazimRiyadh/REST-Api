import app from "./src/app.js";
import config from "./src/config/config.js";
import connectDB from "./src/config/db.js";

const PORT = config.PORT;

const startServer = async () => {
  try {
    await connectDB();
  } catch (error) {
    console.error("Database connection failed, but continuing...", error);
  }

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
  });
};

startServer().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
