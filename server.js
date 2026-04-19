// const express = require('express');
// const app=express();

// //used to parse req.body in express ->put or post
// const bodyParser=require('body-parser');

// app.use(bodyParser.json()); // specifically parse json data and add it to request body

// app.listen(3000,()=>{
//     console.log("Server Started at port no. 3000")
// });


// const mongoose =require('mongoose');

// mongoose.connect('mongodb://localhost:27017/myDatabase')
    
//     // configurations used to made a connection between server and mongodb
//     // now this part is actually a promise
//     // useNewUrlParser:true,
//     // useUnifiedTopology:true
//     // using useNewUrlParser and useUnifiedTopology creates error because latest version of mongoose don't require these now

// // }
// .then(()=>{console.log("Connection Successful")})

// .catch((error)=>{console.log("Received and error")});

// // routes
// app.get('/',(request,response)=>{
//     response.send("Hello ji kese ho sare")
// });

// app.post('/api/cars',(request,response)=>{
//     const {name,brand}=request.body;
//     console.log(name);
//     console.log(brand);
//     response.send("Car Submitted");
// });

const express= require("express"); // it is used to import the framework of express (instance liya h frameowrk ka)
const app=express(); // used to create backened application

const PORT=4000; // hmare server ka address

//body parser
app.use(express.json());

// listen me do chize pass krte hai port no and callback  fn
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
});

app.get("/",(req,res)=>{
    // console.log("This is home page");
    res.send("<h1>This is home page<h1/>")
})

app.post("/car",(req,res)=>{
    console.log("Received a new requiest")
})

// mounting : sare routes isme mount ho jayege
// sare routes import krake ek jgh mount krdenge
// base url dete hai basically 


