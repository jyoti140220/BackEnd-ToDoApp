const knex=require('../modal/userdetials.js')

const getMyToDo=async(req,res)=>{
    var array=[]
    await knex.from('todo').select('todo.text','users.id','users.name','users.email','users.age','cities.id as Id','cities.name as Name','todo.dueDate')
    .join('users','users.id','=','todo.assignedTo')
    .join('cities','cities.id','=','users.cityId').then((datas)=>{
        datas.forEach(data => {
            var data1={text:data.text,assignedTo:{
                    id: data.id,
                    name:data.name,
                    email:data.email,
                    age:data.age,
                    city:{name:data.Name,id:data.Id}
                },
                dueDate: data.dueDate}
            array.push(data1) 
            });
            return res.status(200).send(array)
    }).catch((err)=>{
        return res.status(400).json({message:err,status:400})})
}

module.exports=getMyToDo