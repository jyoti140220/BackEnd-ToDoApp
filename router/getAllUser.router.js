const express=require('express')
const router=express.Router()
const {getAllUser,getUserbyId}=require('../controller/getUsers.js')

router.get('/',getAllUser)
router.get('/:user_id',getUserbyId)

module.exports=router
