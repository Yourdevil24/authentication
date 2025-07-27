const express = require('express');
const router = express.Router();
const { signupValidation, loginValidation } = require('../middlewares/AuthValidation'); 
const { signup, login, logout } = require('../controllers/AuthController');

router.post('/signup', signupValidation, signup);

router.post('/login', loginValidation, login);

router.get('/logout', logout);

module.exports = router;