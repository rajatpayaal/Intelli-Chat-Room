const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const messageRoutes = require("./routes/messagesRoute");





const app = express();
const socket  = require("socket.io");
require("dotenv").config();


app.use(cors());
app.use(express.json());



mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> {
    console.log("DB connection successfull");
}).catch((err)=> {
    console.log(err.message);
});
app.use("/api/auth", userRoutes);

app.use("/api/messages", messageRoutes);




app.get("/", (req, res) => {
    res.send("Hello World!");
  });



const server = app.listen(process.env.PORT,()=>{
    console.log(`server started on Port ${process.env.PORT}`);
});  
 

const io = socket(server,{
    cors:{
       origin: process.env.ORIGIN ,
       credentials : true,
       
    }
});

global.onlineUsers = new Map();
io.on("connection",(socket) => {
    global.chatSocket = socket;
    socket.on("add-user",(userId) => {
        onlineUsers.set(userId, socket.id);
    });


    socket.on("send-msg",(data) => {
        const sendUserSocket = onlineUsers.get(data.to);
        if(sendUserSocket){
            socket.to(sendUserSocket).emit("msg-recieve",data.message);
        }


    });
});