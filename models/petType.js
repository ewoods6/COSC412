const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const petTypeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        
    },
    { timestamps: true }
);

module.exports = mongoose.model('PetType', petTypeSchema);