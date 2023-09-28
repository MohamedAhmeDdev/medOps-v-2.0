const PasswordReport = require("../../Models/PasswordReportModel");
const User = require("../../Models/userModel");
const JWT = require("jsonwebtoken");
const { JWT_SECRET, } = require('../../constant/index');


const passwordReport = async (req, res) => {
    const { token } = req.params;
    const {reason } = req.body;

    if(!reason){
      return res.status(400).json({success: false, message: "Reason Field Is Required"});
    }
    try {
      const decoded = JWT.verify(token, JWT_SECRET);
       const foundUser = await User.findOne({ where: { user_id: decoded.id } });

        const report = await PasswordReport.create({
          user_id:  foundUser.user_id ,
          reason: reason,
          status: 'Pending',
        });
        return res.status(200).json({ success: true,  report});
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return res.status(410).json({ success: false, message: 'Token has expired' });
      }
  
      return res.status(500).json({ success: false, message: error.message });
    }  
}


module.exports = {
    passwordReport,
};