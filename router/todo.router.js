const express=require('express')
const router=express.Router()
const postTodo=require('../controller/todo.js')

router.post('/',postTodo)

module.exports=router
