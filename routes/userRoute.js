const express = require('express')
const userRoute = express.Router();
const userController = require('../controller/userController');

userRoute.post('/createUser', userController.createUser());

module.exports = userRoute;