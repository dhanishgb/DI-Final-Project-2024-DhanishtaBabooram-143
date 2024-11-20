//import model
Users = require('../models/users');

exports.login = async(request, reply) => {
    Users.findOne({
        where: {
            username: request.body.username,
            password: request.body.password
        }
    })
    .then((user) => {
        if(user){
            reply.json({"message": "Login successful"});
        }
        else{
            reply.json({"message": "Invalid credentials"});
        }
    })
    .catch((error) => {
        reply.json({"message": error});
    });
};

exports.register = async(request, reply) => {
    Users.create({
        id: request.body.id,
        username: request.body.username,
        password: request.body.password,
        type: request.body.type,
    })
    .then((user) => {
        reply.json({"message": "User created"});
    })
    .catch((error) => {
        reply.json({"message": error});
    });
};

exports.allUsers = async(request, reply) => {
    data= await Users.findAll();
    reply.json({"message": data});
};