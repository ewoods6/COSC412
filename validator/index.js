exports.userSignupValidator = (req, res, next) => {
    req.check('name', 'Name is required').notEmpty()
    req.check('email', 'email must be valid')
        .matches(/.+\@+\..+/)
        .withMessage('Email must contain @')
    req.check('password', 'Password is required').notEmpty()
    req.check('password')
        .islength({min: 8})
        .withMessage('Password must contain at least 8 characters')
        .matches(/\d/)
        .withMessage('Password must contain number')
        const errors = req.validationErrors()
        if(errors) {
            const firstError = errors.map(error => error.message)[0]
            return res.status(400).json({ error: firstError });
        }
        next(); // moves to the next phase so it doesnt break
};