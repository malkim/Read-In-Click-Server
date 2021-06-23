const express = require('express')
var wordRoute = express.Router();

const wordController = require('../controller/wordController')

wordRoute.get('/insertAll',wordController.insertAll )
// wordRoute.get('/getChirik',wordController.getKamatz )
// wordRoute.get('/getCholam',wordController.getKamatz )
// wordRoute.get('/getSegol',wordController.getKamatz )
// wordRoute.get('/getShuruk',wordController.getKamatz )



module.exports = wordRoute