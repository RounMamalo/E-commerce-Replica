const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorHandler");
const { connectDb } = require("./connection/dbConnection");
const app = express();
const port =  process.env.port || 3000; //check if .port in .env is initialized, else run port 3000
connectDb();


app.use(express.json());
app.use(errorHandler);
app.listen(port, () => {
    console.log(`Server running in port ${port}`)
}) //Setting up the server

app.use("/api/", require("./routes/routes"));













