const Transport = require('../../Models/transport')
const Staff = require('../../Models/staff')
const Role = require('../../Models/roles')





const getTransport = async (req, res) => {
  try {
      const AllTransport = await Transport.findAll({
          include: [{
              model: Staff,
              include: [{
                  model: Role,
                  where: {
                    role: 'transporter'
                  }
              }],
              attributes: ['name', 'email'],
          }],
          order: [[Staff, 'name', 'ASC']],
      });

      if (!AllTransport || AllTransport.length === 0) {
          return res.status(200).json({ success: true, message: "Transport not found" });
      }

      return res.status(200).json({ success: true, AllTransport });
  } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
  }
};






module.exports = {
  getTransport,
};