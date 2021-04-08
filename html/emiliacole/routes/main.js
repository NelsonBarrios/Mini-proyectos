// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

/* GET - home page. */
router.get('/', mainController.root);
router.get('/about', mainController.about);
router.get('/music', mainController.music);
router.get('/contact', mainController.contact);

module.exports = router;
