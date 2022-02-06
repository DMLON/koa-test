const dotenv =require( 'dotenv');
dotenv.config();

const {
  MONGODB_URI,
  PORT
} = process.env;

const config = {
  mongoUri: MONGODB_URI,
  port: PORT
}

module.exports = config;



