const express=require('express');


//import routes
const users_routes=require('./Routes/users');
//const programs_routes_routes=require('./routes/programs');
//const products_routes=require('./Routes/products');


//create server
const server=express();

const logger=(req,res,next)=>{
    console.log('Request made to: '+req.url);
    next();
}

//connect database
//const sequelize=new sequelize ('postgresql://class143_owner:BThOV0lZb3YU@ep-holy-lab-a2xm39f8.eu-central-1.aws.neon.tech/FitnessPlanet?sslmode=require')

//middleware
server.use(express.json()); //middleware to parse json data
server.use(logger);

//link routes
server.use('/api/users',users_routes);
//server.use('/api/programs',programs_routes);
//server.use('/api/products',products_routes);

//test route
server.get('/',(req,res)=>{
    res.json({"API": "works very well"});
});


//server listens
server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});