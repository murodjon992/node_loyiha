const loginGetController = require('../controllers/loginGetController');
const signupGetController = require('../controllers/signupGetController');

const router = require('express').Router();


router.get('/login', loginGetController)
router.get('/signup', signupGetController)
module.exports ={
    path : '/users',
    router
}