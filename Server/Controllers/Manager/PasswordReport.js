const PasswordReport = require("../../Models/PasswordReportModel");
const User = require("../../Models/userModel");



const reportApproval = async (req, res) => {
     const user_id = req.user.user_id;
     const { id }  = req.params;
     const {status} = req.body
    try {  
        const passwordReport = await PasswordReport.findOne({ where: { request_id: id } });
      if (!passwordReport) {
        return res.status(404).json({ success: false, message: "password Report not found"})
      }
     const updateOrder = await PasswordReport.update({ 
        // approver: user_id,
        status: status,
        approval_time : new Date(),
      },{ where:{request_id: id }});    


      return res.status(200).json({ success: true, report: updateOrder, });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message});
    }
};



const getAllPasswordReport = async (req, res) => {
  try {
    const report = await PasswordReport.findAll({ 
      include: [{
        model: User,
        attributes: ['username']
      }],
      order: [['createdAt', 'ASC']],});  
    return res.status(200).json({ success: true, report  });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};




module.exports = {
    reportApproval,
    getAllPasswordReport,
};