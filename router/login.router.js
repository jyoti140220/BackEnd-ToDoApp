const express=require('express')
const router=express.Router()
const login=require('../controller/login.js')

router.get('/',login)

module.exports=router
