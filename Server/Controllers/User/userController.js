const User = require("../../Models/userModel");
const validator =require('validator')



//update user function
const updateUserInfo = async (req, res) => {
  const user_id = req.user.user_id;
  const { username, phoneNumber, address, email } = req.body;

  let validatePhoneNumber = "";
  if (phoneNumber !== undefined && phoneNumber !== null) {
    const phoneNumberStr = phoneNumber.toString();
    if (!validator.isMobilePhone(`0${phoneNumberStr}`, "en-KE")) {
      return res.status(400).json({ success: false, message: "Please enter a valid phone number" });
    }
    validatePhoneNumber = phoneNumberStr;
  }

  try {
    const updateUser = await User.update({
        username: username,
        phoneNumber: validatePhoneNumber,
        address: address,
        email: email,
      },
      { where: { user_id: user_id } }
    );

    return res.status(200).json({ success: true, user: updateUser });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};



//userById
const getUsersById = async (req, res) => {
  const user_id = req.user.user_id;
  try {
    const user = await User.findOne({where: {user_id: user_id}});

    return res.status(200).json({success: true, user });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message});
  }
}

  
module.exports = {
  updateUserInfo,
  getUsersById
};
  