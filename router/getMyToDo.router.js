const express=require('express')
const router=express.Router()
const getMyToDo=require('../controller/getMyTodo.js')

router.get('/',getMyToDo)

module.exports=router
