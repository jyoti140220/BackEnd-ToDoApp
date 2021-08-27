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

module.exports=getAllUser