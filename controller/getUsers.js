const knex=require('../modal/userdetials.js')
var array=[]

const getAllUser=async(req,res)=>{
    await knex.from('users').select('users.id','users.name','email','age','cities.id as Id','cities.name as Name')
    .join('cities','cities.id','=','users.cityId').then((data)=>{
        data.forEach(element => {dic={}
            dic.id=element.id,
            dic.name=element.name,
            dic.email=element.email,
            dic.age=element.age,
            dic.city={id:element.Id,name:element.Name}
            array.push(dic)   
        });
        return res.status(200).json({'users':array})
    }).catch((err)=>{
        return res.status(400).json({message:err,status:400})})
}

const getUserbyId=async(req,res)=>{
    await knex.from('users').select('users.id','users.name','email','age','cities.id as Id','cities.name as Name')
    .join('cities','cities.id','=','users.cityId')
    .where('users.id', req.params.user_id)
    .then((data) => {
        return (data.length == 0) ? res.status(400).json({message:"Do Not Exist User With This ID",status:400}):res.status(200).json({id:data[0].id,name:data[0].name,email:data[0].email,age:data[0].age,city:{id:data[0].Id,name:data[0].Name}});
    }).catch((err) => {
        return res.status(400).json({message: err,status: 404})})     
}


module.exports={getAllUser,getUserbyId}