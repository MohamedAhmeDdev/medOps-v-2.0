const User = require("../../Models/user")





const getAllUsers = async (req, res) => {
  try {
    const getUser = await User.findAll({order: [['name', 'ASC']],});
    const getOnlyUsers = getUser.filter((user) => user.role === "User");

    return res.status(200).json({success: true, user: getOnlyUsers });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message});
  }
}



module.exports = {
  getAllUsers,
};
  