const PasswordReport = require("../../Models/PasswordReportModel");



const reportApproval = async (req, res) => {
     // const user_id = req.user.id;
     const { id }  = req.params;
     const {user_id,} = req.body;

    try {  
        const passwordReport = await PasswordReport.findOne({ where: { request_id: id } });
      if (!passwordReport) {
        return res.status(404).json({ success: false, message: "password Report not found"})
      }
     const updateOrder = await PasswordReport.update({ 
        approver: user_id,
        status: "Approved",
        approval_time : new Date(),
      },{ where:{request_id: id }});    


      return res.status(200).json({ success: true, report: updateOrder, });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message});
    }
};



const getAllPasswordReport = async (req, res) => {
  try {
    const report = await PasswordReport.findAll({ order: [['createdAt', 'ASC']],});  
    return res.status(200).json({ success: true, report  });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};




module.exports = {
    reportApproval,
    getAllPasswordReport,
};