const User = require('../models/user')
const { errorHandler } = require('../helpers/dbErrorHandler')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')

exports.signup = (req, res) => {
    //console.log('req.body', req.body)
    const user = new User(req.body)
    user.save((err, user) => {
        if(err) {
            return res.status(400).json({
                err: errorHandler(err)
            });
        }
        user.salt = undefined
        user.hashed_password = undefined
        res.json({
            user
        });
    });
};

exports.signin = (req, res) => {
    // we will find user based on email
    const { email, password } = req.body
    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User with that email does not exist, please sign up!'
            });
        }
        // email/pw must match
        // create authentication method in user model
        //generate a signed token with user id and secret
        if(!user.authenticate(password)) {
            return res.status(401).json({
                error: 'Email and password dont match'
            })
        }
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)
        res.cookie('t', token, { expire : new Date() + 9999 })
        const { _id, name, email, role } = user
        return res.json({ token, user: { _id, email, name, role } })
    })
};