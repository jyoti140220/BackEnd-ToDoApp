const knex=require('../modal/userdetials.js')

const filtrations=async(req,res)=>{
    var array=[]
    const add=await knex.from('filtration').insert(req.body)
    const selectById=await knex.from('filtration').select('*').where('id',add[0])
    await knex.from('todo').select('todo.text','users.id','users.name','users.email','users.age','cities.id as Id','cities.name as Name','todo.dueDate')
    .join('users','users.id','=','todo.assignedTo')
    .join('cities','cities.id','=','users.cityId')
    .where('age','>=',selectById[0]['ageMoreThan'])
    .where('age','<=',selectById[0]['ageLessThan'])
    .where('cities.id','>=',selectById[0]['cityId']).then((datas)=>{
        if(datas.length==0){
            return res.status(400).json({messsage:"Does Not Exists The Data",status:400})
        }else{
            datas.forEach(data => {
                var data1={text:data.text,assignedTo:{
                        id: data.id,
                        name:data.name,
                        email:data.email,
                        age:data.age,
                        city:{name:data.Name,id:data.Id}
                    },
                    dueDate: data.dueDate}
                array.push(data1)});
                return res.status(200).send(array)
        }
    }).catch((err)=>{
        return res.status(400).json({message:err,status:400})})   
}
module.exports=filtrations
