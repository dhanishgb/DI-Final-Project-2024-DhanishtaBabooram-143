const users = require('../Controllers/users')

const express=require('express');
const router = express.Router()  //create router object

router.post('/register',users.register);
router.post('/login',users.login);
router.get('/allusers',users.allUsers);


module.exports=router