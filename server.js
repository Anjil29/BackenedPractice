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

