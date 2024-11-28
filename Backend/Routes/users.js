// //import controller
// const users = require('../controllers/users')

// const routes=
// [
//     {
//         method:'POST',
//         url:'/api/users/login',
//         handler:users.login
//     },

//     {
//         method:'POST',
//         url:'/api/users/register',
//         handler:users.register
//     }

// ]

// module.exports=routes

const users = require('../controllers/users')

const express=require('express');
const router = express.Router()  //create router object

router.post('/register',users.register);
router.post('/login',users.login);
router.get('/allusers',users.allUsers);


module.exports=router