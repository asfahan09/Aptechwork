let mongo = require("mongoose");
require("dotenv").config();

let db_url = process.env.URL;
console.log(db_url);
let database_connect= async function(){
    if (!db_url) {
        console.log("url not found")
    }
    else{
        try {
            mongo.connect(db_url)
            console.log("databse connected");
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = database_connect;
