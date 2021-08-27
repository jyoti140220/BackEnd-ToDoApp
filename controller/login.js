const knex=require('../modal/userdetials.js')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const jwttoken=require('../middleware/jwt.js')


const login = async (req, res) => {
    const reqdata=req.body
    const data=await knex.from('users').select('*').where('email',reqdata.email)
    if(data.length>0){
        const comaparePassword = await bcrypt.compare(req.body.password,data[0]['password'])
        if (comaparePassword) {
            const token=await jwttoken({ email: req.body.email },process.env.SECRET_KEY)
            console.log(token)
            return res.status(200).json({message: "You Have Logged Successfully!!!",status: 200,token: token})
        }else{
            return res.status(404).json({message: "Invalid Password",status: 404})
        }

    }else{
        return res.status(404).json({message: "Invalid Email-Id",status: 404})
    }  
}

module.exports = login