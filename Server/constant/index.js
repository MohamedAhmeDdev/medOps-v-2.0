const dotenv = require("dotenv");
dotenv.config();

//  server port
const PORT = process.env.PORT;

// database connection
const DATABASE_NAME = process.env.DATABASE_NAME;
const DATABASE_USER = process.env.DATABASE_USER;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
const DATABASE_HOST = process.env.DATABASE_HOST;
const DATABASE_PORT = process.env.DATABASE_PORT;
const DATABASE_DIALECT = process.env.DATABASE_DIALECT;


// JWT secret
const JWT_SECRET = process.env.SECRET;


// email
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;


// cloudinary
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;


module.exports = {
  PORT,
  JWT_SECRET,
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_DIALECT,
  EMAIL_USER,
  EMAIL_PASS,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET
};
