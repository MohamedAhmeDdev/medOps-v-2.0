const PasswordReport = require("../../Models/PasswordReport");
const Staff = require("../../Models/staff");
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
       const foundUser = await Staff.findOne({ where: { staff_id: decoded.id } });

        const report = await PasswordReport.create({
          staff_id:  foundUser.staff_id ,
          reason: reason,
          status: 'pending',
        });
        return res.status(200).json({ success: true,  report});
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return res.status(410).json({ success: false, message: 'Token has expired' });
      }
  
      return res.status(500).json({ 
        success: false,
        message: 'Password Reported have been saved',
        message: error.message
         });
    }  
}


module.exports = {
    passwordReport,
};