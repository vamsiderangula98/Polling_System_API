const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');

router.get('/', homeController.home);

//questions
router.use('/questions', require('./questions'));

//options route
router.use('/options', require('./options'));
module.exports = router;
