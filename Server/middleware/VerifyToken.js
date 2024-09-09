const Staff = require("../Models/staff");
const User = require("../Models/user");
const JWT = require("jsonwebtoken");
const { JWT_SECRET } = require("../constant/index");


const verifyToken = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (token && token.startsWith("Bearer ")) {
      token = token.slice(7, token.length);
    } else {
      return res.status(401).json({ success: false, message: "Authorization token missing" });
    }

    const decoded = JWT.verify(token, JWT_SECRET);
    const foundStaff = await Staff.findOne({ where: { staff_id: decoded.id } });

    if (!foundStaff) {
      return res.status(401).json({ success: false, message: "Invalid login credentials" });
    }

    req.user = foundStaff;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};



const verifyUserToken = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (token && token.startsWith("Bearer ")) {
      token = token.slice(7, token.length);
    } else {
      return res.status(401).json({ success: false, message: "Authorization token missing" });
    }

    const decoded = JWT.verify(token, JWT_SECRET);
    const foundUser = await User.findOne({ where: { user_id: decoded.id } });

    if (!foundUser) {
      return res.status(401).json({ success: false, message: "Invalid login credentials" });
    }
    
  
    req.user = foundUser;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};

module.exports = {
  verifyToken,
  verifyUserToken
};
