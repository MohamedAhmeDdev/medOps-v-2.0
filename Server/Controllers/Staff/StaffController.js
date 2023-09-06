const User = require("../../Models/userModel");
const StaffWarehouse = require("../../Models/staffWarehouseModel");
const nodemailer =require('nodemailer')
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const { JWT_SECRET, EMAIL_PASS, EMAIL_USER} = require('../../constant/index');



//create token
const createToken = (id, name, email) => {
    return JWT.sign({
        id: id,
        name: name,
        email: email,
      },
      JWT_SECRET,{ expiresIn: "1d" }
    );
};
  


//login function
const login = async (req, res) => {
  const { username, password } = req.body;
  if (!password || !username) {
    return res.status(400).json({success: false, message: "Username or password is missing"});
  } 
  
  const foundUser = await User.findOne({ where: { username: username } });
  if (!foundUser) {
    return res.status(401).json({ success: false, message: "Incorrect Username" });
  }

  const CheckUserIfIsActive = await StaffWarehouse.findOne({ where: { user_id: foundUser.user_id} });
  if (CheckUserIfIsActive.account_status !== "Active") {
    return res.status(403).json({ success: false, message: "User is inactive"});
  }
  
  const dbPassword = foundUser.password;
  bcrypt.compare(password, dbPassword).then(async (match) => {
    if (!match) {
      return res.status(401).json({success: false, message: "Incorrect Password"});
    } else {      
        const token = createToken(foundUser.user_id, foundUser.role, foundUser.username);
        const userWarehouse = await StaffWarehouse.findOne({ where: { user_id: foundUser.user_id } });
        if (!userWarehouse) {
          return res.status(404).json({ success: false, message: "User's warehouse not found"});
        }
        
        return res.status(200).json({
          success: true,
          user: {token: token },              
        });
      
    }
  });
};



//forgot Password function
const forgotPassword = async(req,res)=>{
  const { email} = req.body;
  
  try {
    if (!email ) {
      return res.status(400).json({  success: false, message: "Email is missing"});
    }
    const user = await User.findOne({ where: { email: email } });
    if(!user){
      return res.status(401).json({ success: false, message: "Email Does Not Exist"});
    }else if (user.role === "SUPERVISOR" || user.role === "MANAGER") {
      const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
          user: EMAIL_USER,
          pass: EMAIL_PASS
        }
      })
        const mailOption = {
          to: `${user.email}`,
          subject: "Forgot password link",
          html: `
            <p>You requested to reset your password. You have received this email because you requested to recover your account.</p>
            <p>Click on the following link to proceed with the password reset. The link will expire in 5 minutes.</p>
            <p><a href="http://localhost:3000/resetPassword/${user.user_id}">Reset Password</a></p>
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
        const transporter = nodemailer.createTransport({
          service:'gmail',
          auth:{
            user: EMAIL_USER,
            pass: EMAIL_PASS
          }
        })
        const mailOption = {
            to: `${user.email}`,
            subject: "Forgot password link",
            html: `
              <p>You have received this email because a password report has been generated for your account.</p
              <p>Please review the password report to ensure the security of your account.</p>
              <p><a href="http://localhost:3000/PasswordReport/${user.user_id}">View Password Report</a>
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
const resetPassword =async(req,res)=>{
  const id = req.params.id
  const { password ,confirm_password} = req.body;
  const encryptPassword = await bcrypt.hash(password, 10);

  if(!password || !confirm_password){
    return res.status(401).json({ success: false, message: "confirm_password or password is missing"});
  }

  if(password !== confirm_password){
    return res.status(400).json({ success: false, message: "Password Does Not Much"});
  }

  try {
    const updatedPassword = await User.update({password: encryptPassword}, { where: { user_id: id}})
    res.status(200).json({ success: true, user: updatedPassword});
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}





module.exports = {
  login,
  forgotPassword,
  resetPassword,
};