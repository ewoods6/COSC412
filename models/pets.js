const mongoose = require('mongoose');

petSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        }
    },
    { timestamps: true} 
);

module.exports = mongoose.model('Pets', petSchema)