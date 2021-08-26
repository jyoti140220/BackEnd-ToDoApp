const jwt=require('jsonwebtoken');

createToken = (data,secret_key) => {
    return jwt.sign(data, secret_key)

}
module.exports=createToken