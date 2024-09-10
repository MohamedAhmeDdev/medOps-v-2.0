const Transport = require('../../Models/transport')
const Staff = require('../../Models/staff')
const Role = require('../../Models/roles')





const getTransport = async (req, res) => {
  try {
      const transport = await Transport.findAll({
          include: [{
              model: Staff,
              attributes: ['name', 'email'],
          }],
          order: [[Staff, 'name', 'ASC']],
      });

      if (!transport || transport.length === 0) {
          return res.status(200).json({ success: true, message: "Transport not found" });
      }

      return res.status(200).json({ success: true, transport });
  } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
  }
};






module.exports = {
  getTransport,
};