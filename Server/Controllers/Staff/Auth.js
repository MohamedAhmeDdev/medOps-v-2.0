const Staff = require("../../Models/staff");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const { JWT_SECRET, EMAIL_PASS, EMAIL_USER } = require('../../constant/index');
const nodemailer =require('nodemailer')




//create token
const createToken = (id, role, address, username) => {
  return JWT.sign({
      id: id,
      role: role,
      username: username,
      address: address
    },
    JWT_SECRET,{ expiresIn: "1d" }
  );
};


const resetPasswordToken = (id) => {
  return JWT.sign({
      id: id,
    },
    JWT_SECRET, { expiresIn: 120 }
  );
};





//login function
const StaffLogin = async (req, res) => {
    const { name, password } = req.body;
    
    if (!password || !name) {
      return res.status(400).json({ success: false, message: "Enter name and Password" });
    }
  
    try {
      const foundStaff = await Staff.findOne({ where: { name: name } });
      console.log('staff',foundStaff.dataValues);
      
      if (!foundStaff) {
        return res.status(410).json({ success: false, message: "Incorrect name" });
      }
  
      if (foundStaff.role === "manager") {
        const dbPassword = foundStaff.password;
        bcrypt.compare(password, dbPassword, async (match) => {
          if (!match) {
            return res.status(401).json({ success: false, message: "Incorrect Password" });
          } else {
            const token = createToken(foundStaff.dataValues);
             return res.status(200).json({ success: true,user: { token: token }
            });
          }
        });
      }else{     
        const CheckUserIfIsActive = await Staff.findOne({ where: { staff_id: foundStaff.staff_id } });
        if (!CheckUserIfIsActive || CheckUserIfIsActive.account_status == "InActive") {
          return res.status(403).json({ success: false, message: "staff is inactive" });
        }

        const dbPassword = foundStaff.password;
          bcrypt.compare(password, dbPassword, async (match) => {
            if (!match) {
              return res.status(401).json({ success: false, message: "Incorrect Password" });
            } else {
              const token = createToken(foundStaff.dataValues);
              return res.status(200).json({
                 success: true,
                 message: "staff login",
                 staff: token
              });
            }
          });
    }
    } catch (error) {
      return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};



   
const forgotPassword = async(req,res)=>{
    const { email} = req.body;
    
    try {
      if (!email ) {
        return res.status(400).json({  success: false, message: "Email is missing"});
      }
      const staff = await Staff.findOne({ where: { email: email } });

      if(!staff){
        return res.status(401).json({ success: false, message: "Email Does Not Exist"});
      }else if (staff.role === "manager") {
        const token = resetPasswordToken(staff.staff_id);

        const transporter = nodemailer.createTransport({
          service:'gmail',
          auth:{
            user: EMAIL_USER,
            pass: EMAIL_PASS
          }
        })

        const mailOption = {
          to: `${staff.email}`,
          subject: "Forgot password link",
          html: `
            <p>You requested to reset your password. You have received this email because you requested to recover your account.</p>
            <p>Click on the following link to proceed with the password reset. The link will expire in 5 minutes.</p>
            <p><a href="http://localhost:3000/ResetPassword/${token}">Reset Password</a></p>
            <p>If you did not request this, please ignore this email, and your password will remain unchanged.</p>
          `
        };
          transporter.sendMail(mailOption,(err ,response)=>{
          if(err){
            console.log('There was an error',err);
          }else{
            console.log('There was a response ',response);
            res.status(200).json('recovery email sent ')
          }
          })
      }else{
          const token = resetPasswordToken(staff.staff_id);
          const transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
              user: EMAIL_USER,
              pass: EMAIL_PASS
            }
          })

          const mailOption = {
              to: `${staff.email}`,
              subject: "Report Password link",
              html: `
                <p>You have received this email because a password report has been generated for your account.</p
                <p>Please fill the password report to ensure the security of your account.</p>
                <p><a href="http://localhost:3000/PasswordReport/${token}">View Password Report</a>
                <p>If you did not request this report or have any concerns, please ignore this email.</p>
              `
          };
          transporter.sendMail(mailOption,(err ,response)=>{
            if(err){
              console.log('There was an error',err);
            }else{
              console.log('There was a response ',response);
              res.status(200).json('recovery email sent ')
            }
          })
      }
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ success: false, message: error.message });
    }
}
  




//reset password function
const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password, confirm_password } = req.body;

  if (!password || !confirm_password || !token) {
    return res.status(401).json({ success: false, message: "confirm_password or password is missing" });
  }

  if (password !== confirm_password) {
    return res.status(400).json({ success: false, message: "Password Does Not Match" });
  }

  try {
    const encryptPassword = await bcrypt.hash(password, 10);
    const decoded = JWT.verify(token, JWT_SECRET);

    const foundStaff = await Staff.findOne({ where: { staff_id: decoded.id } });
    const updatedPassword = await Staff.update({password: encryptPassword}, { where: { staff_id: foundStaff.staff_id}})
    res.status(200).json({ success: true, updatedPassword});

  } catch (error) {
    console.log( error.message);
    if (error.name === 'TokenExpiredError') {
      return res.status(410).json({ success: false, message: 'Token has expired' });
    }

    return res.status(500).json({ success: false, message: 'An error occurred' });
  }
};

  
module.exports = {
  StaffLogin,
  forgotPassword,
  resetPassword,
};
  