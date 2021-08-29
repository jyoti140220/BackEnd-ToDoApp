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
}).then(()=>{console.log("table createdd.....")}).catch((err)=>{console.log(err)})

knex.schema.createTableIfNotExists('todo',(table)=>{
    table.string('text');
    table.integer('assignedTo');
    table.date('dueDate')
}).then(()=>{console.log("Table Created...")}).catch((err)=>{console.log(err)})



knex.schema.createTableIfNotExists('filtration',(table)=>{
    table.increments('id');
    table.integer('ageMoreThan').notNullable().defaultTo('0')
    table.integer('ageLessThan').notNullable().defaultTo('999')
    table.integer('cityId').notNullable().defaultTo('0')
}).then(()=>{console.log("filtration table create..")}).catch((err)=>{console.log(err)})




module.exports=knex