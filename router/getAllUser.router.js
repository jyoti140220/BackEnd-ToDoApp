const express=require('express')
const router=express.Router()
const getAllUser=require('../controller/getUsers.js')

router.get('/',getAllUser)

module.exports=router
