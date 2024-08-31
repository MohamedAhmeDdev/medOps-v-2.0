const User = require("../Models/user");
const JWT = require("jsonwebtoken");

const { JWT_SECRET } = require("../constant/index");

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization;
    const decoded = JWT.verify(token, JWT_SECRET);
    const foundUser = await User.findOne({ where: { user_id: decoded.id } });

    if (!foundUser) {
      return res.status(401).json({ success: false, message: "Invalid login credentials"});
    }
  
    req.user = foundUser;
    next();
  };


module.exports = {
  verifyToken,
};