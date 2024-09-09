const User = require("../../Models/user");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const { JWT_SECRET, EMAIL_PASS, EMAIL_USER } = require('../../constant/index');
const validator =require('validator')
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



//user signup
const signupForUser = async (req, res) => {
    const { name,email, phoneNumber,address, password} = req.body;
    if( !name || !password || !email || !phoneNumber || !address){
      return res.status(400).json({ success: false, message: "All Fields Are Required"});
    }

    if (!validator.isMobilePhone(phoneNumber, "en-KE")) {
      return res .status(401).json({ success: false, message: "Please enter a valid phone number" });
    }

    const encryptPassword = await bcrypt.hash(password, 10);

      try {
        const user = await User.create({
          name: name,
          password: encryptPassword,
          address: address,
          phoneNumber: phoneNumber,
          email: email,
          role: 'User',
        });
        const token = createToken(user.user_id, user.role, user.staff_function, user.address, user.name);
        return res.status(200).json({ success: true,user: { token: token }
        });
      } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
      }
};


//login function
const login = async (req, res) => {
    const { name, password } = req.body;
    
    if (!password || !name) {
      return res.status(400).json({ success: false, message: "Enter name and Password" });
    }
  
    try {
      const foundUser = await User.findOne({ where: { name: name } });
      
      if (!foundUser) {
        return res.status(410).json({ success: false, message: "Incorrect name" });
      }
  
        const dbPassword = foundUser.password;
        bcrypt.compare(password, dbPassword, async (err, match) => {
          if (err || !match) {
            return res.status(401).json({ success: false, message: "Incorrect Password" });
          } else {
            const token = createToken(foundUser.user_id, foundUser.role, foundUser.name);
             return res.status(200).json({ 
               success: true,
               message: "user logged in",
               user: token
            });
          }
        });
      
    } catch (error) {
      console.log(error);
      
      return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  };

   

const forgotPassword = async(req,res)=>{
    const { email} = req.body;
    
    try {
      if (!email ) {
        return res.status(400).json({  success: false, message: "Email is missing"});
      }
      const user = await User.findOne({ where: { email: email } });
      if(!user){
        return res.status(401).json({ success: false, message: "Email Does Not Exist"});
      }else {
        const token = resetPasswordToken(user.user_id);

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
            <p><a href="http://localhost:3000/userResetPassword/${token}">Reset Password</a></p>
            <p>If you did not request this, please ignore this email, and your password will remain unchanged.</p>
          `
        };
          transporter.sendMail(mailOption,(err ,response)=>{
          if(err){
            console.log('There was an error',err);
            return res.status(401).json({ success: false, message: "There was an error" });
          }else{
            res.status(200).json({ success: false, message: 'Email Sent' })
          }
          })
      }
    } catch (error) {
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

    const foundUser = await User.findOne({ where: { user_id: decoded.id } });
    const updatedPassword = await User.update({password: encryptPassword}, { where: { user_id: foundUser.user_id}})
    return res.status(200).json({ 
      success: true,
      message: "Password Updated",
      user: updatedPassword
    });

  } catch (error) {
    console.log( error.message);
    if (error.name === 'TokenExpiredError') {
      return res.status(410).json({ success: false, message: 'Token has expired' });
    }

    return res.status(500).json({ success: false, message: 'An error occurred' });
  }
};

  
module.exports = {
  signupForUser,
  login,
  forgotPassword,
  resetPassword,
};
  