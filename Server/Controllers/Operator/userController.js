const User = require("../../Models/userModel")


const searchForUser = async (req, res) => {
  try {
    const { username, email } = req.query;

     const users = await User.findAll({order: [['username', 'ASC']]});
     const searchUser = users.filter(user => {
    if (
      (username && user.username !== String(username)) ||
      (email && user.email !== String(email))
    ){
      return false;
    }
    return true;
   });

      const getOnlyUsers = searchUser.filter((user) => user.role === "User");
      if (getOnlyUsers.length === 0) {
      return res.status(404).json({success: false, message: "No matching results found"});
    }

    return res.status(200).json({ success: true, user: getOnlyUsers });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};



const getAllUsers = async (req, res) => {
  try {
    const getUser = await User.findAll({order: [['username', 'ASC']],});
    const getOnlyUsers = getUser.filter((user) => user.role === "User");

    return res.status(200).json({success: true, user: getOnlyUsers });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message});
  }
}



module.exports = {
  searchForUser,
  getAllUsers,
};
  