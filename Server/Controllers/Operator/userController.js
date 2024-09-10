const User = require("../../Models/user")





const getAllUsers = async (req, res) => {
  try {
    const user = await User.findAll({order: [['name', 'ASC']],});
 
    return res.status(200).json({success: true, user });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message});
  }
}



module.exports = {
  getAllUsers,
};
  