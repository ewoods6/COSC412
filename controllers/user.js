const User = require('../models/user')

exports.userById = (req, res, next, id) => {
    user.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            })
        }
        req.profile = user
        next()
    })
}