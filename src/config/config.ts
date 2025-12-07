//add the config related code here
import {config as conf} from "dotenv";
conf()
const _config = {
  PORT: process.env.PORT || 3000,
  MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING as string,
};

export default Object.freeze(_config)