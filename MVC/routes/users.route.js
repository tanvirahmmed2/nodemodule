const express= require('express')
const { getUsers, postUsers, home } = require('../controllers/users.controller')




const router =express.Router()




router.get("/users", getUsers)
router.get("/", home)


router.post("/users", postUsers)

module.exports = router