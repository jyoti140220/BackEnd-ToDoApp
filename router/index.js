const express=require('express')
const router=express.Router()

router.use('/signup',require('./signup.router.js'))
router.use('/login',require('./login.router.js'))



module.exports=router

