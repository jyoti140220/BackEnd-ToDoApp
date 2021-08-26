const express=require('express')
const router=express.Router()
const signup=require('../controller/signup.js')

router.get('/',signup)

module.exports=router
