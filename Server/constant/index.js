const dotenv = require("dotenv");
dotenv.config();

const EMAIL_USER = process.env.USER;
const EMAIL_PASS = process.env.PASS;
const JWT_SECRET = process.env.SECRET || "secret";



module.exports = {
  JWT_SECRET,
  EMAIL_USER,
  EMAIL_PASS,
};