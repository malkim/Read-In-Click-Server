const mongoose = require('mongoose')
const word = require('../models/wordSchema')

const getWords = async (req, res) => {
    try {
        let words = await word.findOne(req.params.kind)
        res.status(200).json({ words })
    }
    catch{
        res.status(500).send('getKamatz failed')
    }
}


module.exports = { getWords }