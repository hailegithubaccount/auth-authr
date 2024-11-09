const express=require('express')
const authController=require('../controller/authController')
const auth = require('../middleware/auth')

const router=express.Router()

router.post('/register',authController.register)
router.post('/login',authController.login)
router.get('/',auth.protect,auth.isUser,authController.getAllUser)



module.exports=router