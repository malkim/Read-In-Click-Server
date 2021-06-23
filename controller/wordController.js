const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const word = require('../models/wordSchema')


const insertAll = async (req, res) => {
    try {
        let kamatz = new word('kamatz', ['אף', 'בד', 'גב', 'גג', 'גל', 'גן', 'גס', 'דל', 'דף'
            , 'דק', 'זך', 'חג', 'חד', 'חי', 'חם', 'טל', 'טף', 'כד'
            , 'כף', 'סל', 'עם', 'פג', 'פך', 'פס', 'צו', 'קו', 'קל', 'קש', 'רך', 'רץ', 'שק', 'הר',
            'כר', 'מר', 'פר', 'צר', 'קר', 'רע', 'שר', 'פח', 'צח', 'בת', 'מס', 'רב', 'שי', 'צד'])
        let chirik = new word('chirik', [])
        await kamatz.save();
        res.send('insert successfully')
    }
    catch{
        res.send('error')
    }
}


module.exports = { insertAll }





