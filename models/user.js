const mongoose = require('mongoose')
const crypto = require('crypto')
const uuidv1 = require('uuid/v1')

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true
        },

        email: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },

        hashed_password: {
            type: String,
            required: true
        },

        about: {
            type: String
        },

        salt: String, 

        role: {
            type: Number,
            default: 0
        },

    }, {timestamps: true}
);