const PasswordReport = require("../../Models/PasswordReportModel");
const staffWarehouse = require("../../Models/staffWarehouseModel");


const passwordReport = async (req, res) => {
    const {user_id , reason } = req.body;

    if(!reason){
      return res.status(400).json({success: false, message: "Reason Field Is Required"});
    }
    try {
      const find = await staffWarehouse.findOne({ where: { user_id: user_id } });

      if(!find){
        return res.status(401).json({success: false, message: "warehouse Not Found"});
      }

      const report = await PasswordReport.create({
        user_id: user_id ,
        reason: reason,
        status: 'Pending',
       });
        return res.status(200).json({ success: true,  report});
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }  
}


module.exports = {
    passwordReport,
};