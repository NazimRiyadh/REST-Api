//add the config related code here
import { config as conf } from "dotenv";
conf();

const _config = {
  PORT: process.env.PORT || 3000,
  MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING as string,
};

// Validate required environment variables
if (!_config.MONGO_CONNECTION_STRING) {
  console.warn(
    "Warning: MONGO_CONNECTION_STRING is not set. Database connection will fail."
  );
  console.warn("Please create a .env file with MONGO_CONNECTION_STRING");
}

export default Object.freeze(_config);
