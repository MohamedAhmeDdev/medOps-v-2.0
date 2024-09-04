const PasswordReport = require("../../Models/PasswordReport");
const Staff = require("../../Models/staff");
const { JWT_SECRET, EMAIL_PASS, EMAIL_USER } = require('../../constant/index');
const JWT = require("jsonwebtoken");
const nodemailer =require('nodemailer')

const resetPasswordToken = (id) => {
  return JWT.sign({
      id: id,
    },
    JWT_SECRET, { expiresIn: 120 }
  );
};


const reportApproval = async (req, res) => {
  const staff_id = req.user.staff_id; 
  const { id } = req.params;
  const { status } = req.body;

  try {
    const passwordReport = await PasswordReport.findOne({ where: { request_id: id } });
    if (!passwordReport) {
      return res.status(404).json({ success: false, message: "Password report not found" });
    }

    const updatedReport = await PasswordReport.update({
      approver: staff_id,
      status: status,
      approval_time: new Date(),
    }, { where: { request_id: id } });

    if (status !== "approved") {
      return res.status(400).json({ success: false, message: "Password reset not approved" });
    }

    const staff = await Staff.findOne({ where: { staff_id: passwordReport.staff_id } });
    if (!staff) {
      return res.status(404).json({ success: false, message: "Staff does not exist" });
    }

    const token = resetPasswordToken(staff.staff_id);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const mailOption = {
      to: staff.email,
      subject: "Forgot password link",
      html: `
        <p>You requested to reset your password. You have received this email because you requested to recover your account.</p>
        <p>Click on the following link to proceed with the password reset. The link will expire in 5 minutes.</p>
        <p><a href="http://localhost:3000/ResetPassword/${token}">Reset Password</a></p>
        <p>If you did not request this, please ignore this email, and your password will remain unchanged.</p>
      `,
    };

    transporter.sendMail(mailOption, (err, response) => {
      if (err) {
        console.error('There was an error:', err);
        return res.status(500).json({ success: false, message: "There was an error sending the email" });
      } else {
        return res.status(200).json({ success: true, message: 'Recovery email sent' });
      }
    });

  } catch (error) {
    console.error('Error during report approval:', error);
    return res.status(500).json({ success: false, message: error.message });
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