const express=require('express')
const router=express.Router()
const getCityyname=require('../controller/city.js')

router.get('/',getCityyname)

module.exports=router
