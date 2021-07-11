const Pets = require('../models/pets')
const { errorHandler } = require('../helpers/dbErrorHandler')


exports.create = (req, res) => {
    const pets = new Pets(req.body)
    pets.save((err, data) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({ data });
    });
};