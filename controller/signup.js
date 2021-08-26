const knex=require('../modal/userdetials.js')
const bcrypt=require('bcrypt')


const signup = async (req, res) => {
    var reqdata = req.body
    try {  
        const userExits=await knex.from('users').select('*').where('email',reqdata.email)
        if (userExits.length>0){
            return res.status(208).json({
                message:"Email Is Already Exists",
                status:208
            })
        }else{
            const salt = await bcrypt.genSalt(10);
            reqdata.password = await bcrypt.hash(reqdata.password, salt);
            await knex.from('users').insert(reqdata).then(()=>{return res.status(200).json({
                message:"You Have Signup Succesfully!!",
                status:200})
            }).catch((err)=>{return res.status(400).json({ message: err, status: 404 })})  
        }
    } catch (err) {
        return res.status(400).send(err)
         
    }
}
module.exports=signup
