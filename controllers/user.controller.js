const ManagerFactory = require('../dao/managers/manager.Mongo/factory.manager.js')

const userManager = ManagerFactory.getManagerInstance('users')

const create = async (req, res) => {
    const { body } =  req
  
    const created = await userManager.create(body)
  
    res.send(created)
}

module.exports = {
    create
}