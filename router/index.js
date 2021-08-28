const express=require('express')
const router=express.Router()

router.use('/signup',require('./signup.router.js'))
router.use('/login',require('./login.router.js'))
router.use('/city',require('./city.router.js'))
router.use('/users',require('./getAllUser.router.js'))
router.use('/todo',require('./todo.router.js'))
router.use('/mytodo',require('./getMyToDo.router.js'))



module.exports=router

