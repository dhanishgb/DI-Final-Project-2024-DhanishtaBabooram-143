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
            reply.json({"message": "Login successful", "user": user});
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

const User = require('../models/users'); // Ensure this path is correct

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Send user data back to the frontend
        res.json({
            message: 'User logged in successfully',
            user: {
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
