const ManagerFactory = require('../dao/managers/manager.Mongo/factory.manager.js')

const userManager = ManagerFactory.getManagerInstance('users')

const create = async (req, res) => {
    const { body } =  req
  
    const created = await userManager.create(body)
  
    res.send(created)
}

const changeUserRole = async (req, res) => {
    const userId = req.params.uid;
    const newRole = req.body.role;
  
    try {
      const result = await userManager.changeUserRole(userId, newRole);
  
      if (result.modified === 0) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      res.status(200).json({ message: 'Rol de usuario actualizado con éxito' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al actualizar el rol de usuario' });
    }
}


module.exports = {
    create,
    changeUserRole
}