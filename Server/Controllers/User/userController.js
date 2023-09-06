const User = require("../../Models/userModel");
const bcrypt = require("bcrypt");
const nodemailer =require('nodemailer')
const validator =require('validator')
const JWT = require("jsonwebtoken");
const { JWT_SECRET, EMAIL_PASS, EMAIL_USER  } = require('../../constant/index');



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


//user signup
const signupForUser = async (req, res) => {
    const { email, password} = req.body;
    if( !email || !password){
      return res.status(400).json({ success: false, message: "All Fields Are Required"});
    }

    const encryptPassword = await bcrypt.hash(password, 10);
    const checkingIfEmailExists = await User.findOne({ where: { email: email } });
    if (checkingIfEmailExists) {
      return res.status(401).json({ success: false, message: "Email already exists"});
    } else {
      try {
        const user = await User.create({
          email: email,
          password: encryptPassword,
          role: 'User',
        });
        return res.status(200).json({ success: true, user})
      } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
      }
    }
};


//login function
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!password || !email ) {
    return res.status(400).json({success: false, message: "Enter Email And password"});
  } 
  
  const foundUser = await User.findOne({ where: { email: email } });
  if (!foundUser) {
    return res.status(401).json({ success: false, message: "Incorrect Email" });
  }
  
  const dbPassword = foundUser.password;
  bcrypt.compare(password, dbPassword).then(async (match) => {
    if (!match) {
      return res.status(401).json({success: false, message: "Incorrect Password"});
    } else {
        const token = createToken(foundUser.id, foundUser.role, foundUser.username);
        return res.status(200).json({ success: true, 
          user: {
             token: token 
            }
          });     
      }
  });
};
   


//update user function
const updateUserInfo = async (req, res) => {
  const id = req.params.id
  const { username, phoneNumber, address, email} = req.body;

  let validatePhoneNumber 
  if (phoneNumber) {
    if (!validator.isMobilePhone(phoneNumber, "en-KE")) {
      return res .status(400).json({ success: false, message: "Please enter a valid phone number" });
    }
    validatePhoneNumber = phoneNumber;
  }
  
  try {
      const updateUser = await User.update({
       username: username,
       phoneNumber: validatePhoneNumber,
       address: address,
       email: email,
       },{where: { user_id: id} });
       return res.status(200).json({ success: true, user:updateUser})
     } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
};


//forgot Password function
const forgotPassword = async(req,res)=>{
  const { email} = req.body;
  
  try {
    if (!email ) {
      return res.status(40).json({  success: false, message: "Email Does Not Exist"});
    }
      
    const user = await User.findOne({ where: { email: email } });
    if(!user){
      return res.status(400).json({ success: false, message: "email does not  exists"});
      
    }else{
    const transporter = nodemailer.createTransport({
      service:'gmail',
      auth:{
        user: EMAIL_USER,
        pass: EMAIL_PASS
      }
    })
    const mailOption={
      to:`${user.email}`,
      subject:"Forgot password link",
      html:'<p>You requested for reset password, You have this email because you have request to recover your account Click on the following link bellow to proceed the link will expire in 5 min <a href="https://double-diner-user.vercel.app/resetPassword/' + user.id + '">Forgot Password</a> if you did not request this please ignore this email and your password will remain the same</p>'
    }
    
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
    return res.status(500).json({ success: false, message: error.message });
  }
}


//reset password function
const resetPassword =async(req,res)=>{
  const id = req.params.id
  const { password ,confirm_password} = req.body;
  const encryptPassword = await bcrypt.hash(password, 10);

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
  signupForUser,
  login,
  updateUserInfo,
  forgotPassword,
  resetPassword,
};
  