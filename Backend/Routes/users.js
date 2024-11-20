//import controller
const users = require('../controllers/users')

const routes=
[
    {
        method:'POST',
        url:'/api/users/login',
        handler:users.login
    },

    {
        method:'POST',
        url:'/api/users/register',
        handler:=users.register
    }

]

module.exports=routes