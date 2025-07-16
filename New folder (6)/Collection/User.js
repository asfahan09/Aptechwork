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
    password: {
        type : String,
        required:true
    },
    age:{
        type:Number,
        required:false
    },
    age : {
        type : Number,
        required : false
    },
    city : {
        type : String,
        default : "karachi"
    },
    Record_time:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongo.model("users",user_structure)