import app from "./src/app.js";
import config from "./src/config/config.js";
import connectDB from "./src/config/db.js";

const PORT = config.PORT;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
