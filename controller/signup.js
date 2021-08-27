const knex=require('../modal/userdetials.js')

const bcrypt=require('bcrypt')


const signup = async (req, res) => {
    var reqdata = req.body
    try {  
        const userExits=await knex.from('users').select('*').where('email',reqdata.email)
        if (userExits.length>0){
            await knex.from('users').select('users.id','users.name','users.email','users.age','cities.name as Name','cities.id as Id')
           .join('cities','cities.id','=','users.cityId')
           .where('users.email',req.body.email)
           .where('users.cityid',req.body.cityId)
            .then((data)=>{
                if (data.length==0){
                    return res.status(200).json({id:req.body.id,name:req.body.name,email:req.body.email,age:req.body.age,city:{}})
                }
                var dicData=data[0]
                return res.status(200).json({id:dicData.id,name:dicData.name,email:dicData.email,age:dicData.age,city:{name:dicData.Name,id:dicData.Id}})
            }).catch((err)=>{
                return res.status(400).send(err)
            })
        }else{
            const salt = await bcrypt.genSalt(10);
            reqdata.password = await bcrypt.hash(reqdata.password, salt);
            const cityData=await knex.from('cities').select('*').where('cities.id',req.body.cityId)
            await knex.from('users').insert(reqdata).then(()=>{return res.status(200).json({id:req.body.id,name:req.body.name,email:req.body.email,age:req.body.age,city:{name:cityData[0].name,id:req.body.cityId}})
            }).catch((err)=>{return res.status(400).json({ message: err, status: 404 })})  
        }
    } catch (err) {
        return res.status(400).send(err)
         
    }
}
module.exports=signup
