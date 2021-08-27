const knex=require('../config/db.js')

knex.schema.createTableIfNotExists('users',(table)=>{
    table.increments('id');
    table.string('name');
    table.string('password');
    table.string('email')
    table.integer('age')
    table.integer('cityId')
}).then(()=>{console.log("table created..")}).catch((err)=>{console.log(err)})


knex.schema.createTableIfNotExists('cities',(table)=>{
    table.increments('id');
    table.string('name');
}).then(()=>{console.log("table createdm.....")}).catch((err)=>{console.log(err)})




module.exports=knex