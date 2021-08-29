const express=require('express')
const router=express.Router()
const filtrations=require('../controller/getUsersByFiltration')

router.get('/',filtrations)

module.exports=router
