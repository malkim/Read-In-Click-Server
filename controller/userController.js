const mongoose = require('mongoose');
const User = require('userSchema');
const jwt = require('jsonwebtoken');

const createUser = (req, res) => {
    console.log("!!!!!");
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    let user = new User(req.body)
    user.save(function (err, user) {
        if (err)
            res.status(400).send(err);
        else

            res.status(200).json({ userCB: user })
    })
}

const signInById = (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {
            res.status(200).json({ theUser: user })
        })
        .catch((error) => {
            res.status(500).json({ error: error })
        })
}


module.exports = { createUser, signInById }