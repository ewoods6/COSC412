const express = require('express');
const router = express.Router();

const { userById } = require('../controllers/user');

router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);
router.get('/signout', signout);

router.param('userId', userById)

module.exports = router;