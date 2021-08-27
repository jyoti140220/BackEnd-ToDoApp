const knex=require('../modal/userdetials.js')

const getCityyname=async(req,res)=>{
    const reqData=req.body
    const data=await knex.from('cities').select('*').where('name',reqData.name)
    if (data.length==0){
        await knex.from('cities').insert(reqData).then((data)=>{return res.status(200).json({id:data[0],name:reqData.name})})
        .catch((err)=>{return res.status(400).json({ message: err, status: 404 })})  
    }else{
        return res.status(200).json(data[0])
    }
}

module.exports=getCityyname