let mongo = require("mongoose");

let user_structure = mongo.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:false
    },

})
module.exports = mongo.model("users" , user_structure)
