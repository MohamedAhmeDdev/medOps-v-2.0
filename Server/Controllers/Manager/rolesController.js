const Role = require('../../Models/roles')
const validator =require('validator')



const createRoles = async (req, res) => {
    const {role  } = req.body;
    if(!role){
      return res.status(400).json({success: false, message: "All Fields Are Required"});
    }

    try {
      const roles = await Role.create({
        role: role
       });
        return res.status(200).json({ success: true,  roles});
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }  
}



const getRoles = async (req, res) => {
    try {
      const role = await Role.findAll({ });  
      return res.status(200).json({ success: true, role  });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
};




const getRoleById = async (req, res) => {
  const id = req.params.id
  try {
    const role = await Role.findAll({ where: { role_id: id}});

    return res.status(200).json({success: true,  role });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}



const UpdateRole = async (req, res) => {
  const id = req.params.id
  const {role } = req.body;

    try {  
      const roles = await Role.update({ role: role },{where: {role_id: id} });

      return res.status(200).json({
        success: true,
        message: "role updated",
        role:roles
      });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message});
    }
};


 
module.exports = {
    createRoles,
    getRoles,
    getRoleById,
    UpdateRole,
};