const knex=require('../modal/userdetials.js')


const postTodo=async(req,res)=>{
    const dataInsert=await knex.from('todo').insert(req.body);
    await knex.from('todo').select('todo.text','users.id','users.name','users.email','cities.id as Id','cities.name as Name','todo.dueDate')
    .join('users','users.id','=','todo.assignedTo')
    .join('cities','cities.id','=','users.cityId')
    .where('users.id',req.body.assignedTo)
    .then((data)=>{
        const data1={
            todo: {text: data[0].text,assignedTo: {
                    id: data[0].id,
                    name:data[0].name,
                    email:data[0].email,
                    city: {name: data[0].Name,id: data[0].Id
                    }
                },
                dueDate: data[0].dueDate}
        }
        return res.status(200).send(data1)
    }).catch((err)=>{
        return res.status(400).json({message:err,status:400})})
}

module.exports=postTodo