const Transport = require('../../Models/transportModel')
const User = require('../../Models/userModel')




const searchForTransport = async (req, res) => {
  try {
    const { status } = req.query;

    const transport = await Transport.findAll({
      include: [{
        model: User,
        attributes: ['username', 'email'],
      }],
      order: [[User, 'username', 'ASC']],
      });

      const searchTransport = transport.filter((transport) => {
        if (
          (status && transport.status !== status)
        ) {
          return false;
        }
        return true;
      });
    

    if (searchTransport.length === 0) {
        return res.status(404).json({success: false, message: "No matching results found"});
    }

    return res.status(200).json({ success: true, transport: searchTransport });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};






const getTransport = async (req, res) => {
    try {
      const AllTransport = await Transport.findAll({
        include: [{
          model: User,
          attributes: ['username', 'email'],
        }],
        order: [[User, 'username', 'ASC']],
      });
     
      if(AllTransport.length === 0){
        return res.status(200).json({success: true,  message: "transport not found" });
      }
  
      return res.status(200).json({ success: true, transport: AllTransport });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
};





module.exports = {
  searchForTransport,
  getTransport,
};