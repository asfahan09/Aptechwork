const mongo = require("mongoose");
require("dotenv").config();
const db_url = process.env.URL;
const Database_Connect = async function(){
    if (!db_url){
        console.log("URl Not Found")
    } else {
        try{
            mongo.connect(db_url);
            console.log("Databse Conected")

        }catch (error){
            console.log(error)

        }
    }
}
module.exports = Database_Connect;