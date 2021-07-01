const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const word = require('../models/wordSchema')


const insertKamatz = async (req, res) => {
    try {
        let kamatz = new word('kamatz', ['אף', 'בד', 'גב', 'גג', 'גל', 'גן', 'גס', 'דל', 'דף'
            , 'דק', 'זך', 'חג', 'חד', 'חי', 'חם', 'טל', 'טף', 'כד'
            , 'כף', 'סל', 'עם', 'פג', 'פך', 'פס', 'צו', 'קו', 'קל', 'קש', 'רך', 'רץ', 'שק', 'הר',
            'כר', 'מר', 'פר', 'צר', 'קר', 'רע', 'שר', 'פח', 'צח', 'בת', 'מס', 'רב', 'שי', 'צד'])
        // let chirik = new word('chirik', [])
        await kamatz.save();
        res.send('insert kamatz successfully')
    }
    catch{
        res.send('error')
    }
}

const insertChirik = async (req, res) => {
    try {
        let chirik = new word('chirik', ['גיל', 'קיר', 'גיר', 'דיר', 'שיר', 'סיד', 'מיץ', 'עיר', 'גיד', 'ניר', 'פיל', 'דיר', 'זיו', 'טיט'])
        await chirik.save();
        res.send('insert chirik successfully')
    }
    catch{
        res.send('error')
    }
}

const insertCholam = async (req, res) => {
    try {
        let cholam = new word('cholam', ['קול', 'חול', 'מור', 'קור', 'טוב', 'חור', 'אור', 'בוץ', 'קוץ', 'חוף', 'עוף', 'שור', 'חום', 'יום', 'גוי', 'סוף'])
        await cholam.save();
        res.send('insert cholam successfully')
    }
    catch{
        res.send('error')
    }
}

const insertShuruk = async (req, res) => {
    try {
        let shuruk = new word('shuruk', ['בור', 'דוד', 'חור', 'אור', 'צוף', 'זוז', 'סוד', 'סוס', 'בול', 'שום'])
        await shuruk.save();
        res.send('insert shuruk successfully')
    }
    catch{
        res.send('error')
    }
}
const insertSegol = async (req, res) => {
    try {
        let segol = new word('segol', ['כס', 'שן', 'הד', 'עד'])
        await segol.save();
        res.send('insert segol successfully')
    }
    catch{
        res.send('error')
    }
}

module.exports = { insertKamatz, insertChirik, insertCholam }





