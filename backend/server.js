const express = require("express"); //initialize ExpressJS
const cors = require("cors") //initialize Cors policy for web-communication (This is important to use because front and backend runs in different ports)
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorHandler");
const { connectDb } = require("./connection/dbConnection"); //Initialize the connection in the server with the MongoDB database
const app = express(); //Declare express
const port =  process.env.port || 3000; //check if .port in .env is initialized, else run port 3000

connectDb(); //Start the connection
app.use(cors()); //Implement the Cors function
app.use(express.json());
app.use(errorHandler);
app.listen(port, () => {
    console.log(`Server running in port ${port}`)
}) //Setting up the server

app.use("/product/", require("./routes/productRoutes"));
app.use("/auth/", require("./routes/auth"));













