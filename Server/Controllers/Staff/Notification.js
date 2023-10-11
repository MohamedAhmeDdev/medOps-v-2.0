const Notification = require('../../Models/Notification')
const User = require('../../Models/userModel')


const createNotification = async (req, res) => {
    const user_id = req.user.user_id;
    const {subject,message} = req.body;
    if(!subject || !message){
      return res.status(400).json({success: false, message: "All Fields Are Required"});
    }

    try {
      const notification = await Notification.create({
        user_id: user_id,
        subject: subject,
        message: message,
       });
        return res.status(200).json({ success: true,  notification});
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }  
}





const getAllNotificationInfo = async (req, res) => {
    try {
      const notificationInfo = await Notification.findAll({   
      include: [{
        model: User,
      }],
       order: [['createdAt', 'DESC']],});  
      return res.status(200).json({ success: true, notification: notificationInfo  });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
};



const getNotificationById = async (req, res) => {
  const id = req.params.id
  try {
    const notificationById = await Notification.findAll({ 
      include: [{
      model: User,
    }],
    where: { notification_id: id}});

    return res.status(200).json({success: true, notification: notificationById });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}




const deleteNotification = async (req, res) => {
  try {
      await Notification.destroy({where: {notification_id: req.params.id}});

    return res.status(200).json({ success: true, deleteNotification});
  } catch (error) {
      res.json({ message: error.message });
  }  
}

 
module.exports = {
    createNotification,
    getAllNotificationInfo,
    getNotificationById,
    deleteNotification
};