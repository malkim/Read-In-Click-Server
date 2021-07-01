const express = require('express')
var wordRoute = express.Router();

const wordController = require('../controller/getWordController')

wordRoute.get('/get/:kind', wordController.getWords)
// wordRoute.get('/getChirik',wordController.getKamatz )
// wordRoute.get('/getCholam',wordController.getKamatz )
// wordRoute.get('/getSegol',wordController.getKamatz )
// wordRoute.get('/getShuruk',wordController.getKamatz )



module.exports = wordRoute