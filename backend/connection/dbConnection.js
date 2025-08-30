const mongoose = require("mongoose"); //Initialize mongoose since we are using MongoDB  - It can be different depending on the database that will be used for the project
const connectDb = async () => {
    //Initialize the Database [Don't forget the Async-Await and Try-Catch combo!! Since you are working with API or even cloud database]
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database connectd: ", connect.connection.host, connect.connection.name)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
module.exports = {
    connectDb
}