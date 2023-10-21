const { Router } = require('express')
const {
  create,
  changeUserRole
} = require ("../../controllers/user.controller.js")

const router = Router()

router.post('/', create)
router.put('/users/premium/:uid', changeUserRole);

module.exports = router
