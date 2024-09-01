const PasswordReport = require("../../Models/PasswordReport");
const Staff = require("../../Models/staff");



const reportApproval = async (req, res) => {
     const staff_id = req.Role.Role_id;
     const { id }  = req.params;
     const {status} = req.body
    try {  
        const passwordReport = await PasswordReport.findOne({ where: { request_id: id } });
      if (!passwordReport) {
        return res.status(404).json({ success: false, message: "password Report not found"})
      }
     const updateOrder = await PasswordReport.update({ 
        approver: staff_id,
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
        model: Staff,
        attributes: ['name']
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