const express = require ('express')
const app = express()
app.use(express.json());
require("dotenv").config();
const port = process.env.PORT

//connexion à la base de données
const connectDB = require("./config/connectDB")
connectDB()

//utiliser les routes
const routeUser =require("./routes/userRoutes")
app.use("/api", routeUser);

app.listen(port, (err)=>{
    err
        ? console.log(err)
        :console.log('the server is running on port : '+ port)
})
