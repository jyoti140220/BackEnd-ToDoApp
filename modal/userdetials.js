const knex=require('../config/db.js')

knex.schema.createTableIfNotExists('users',(table)=>{
    table.increments('id');
    table.string('name');
    table.string('password');
    table.string('email')
    table.integer('age')
}).then(()=>{console.log("table created..")}).catch((err)=>{console.log(err)})

module.exports=knex