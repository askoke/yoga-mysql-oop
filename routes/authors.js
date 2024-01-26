const express = require('express');
const router = express.Router();
const auhtorControllerClass = require('../controllers/author');

const authorController = new auhtorControllerClass()

router.get('/', (req, res) => authorController.getAuthors(req, res));
router.get('/:id', (req, res) => authorController.getAuthorById(req, res));

module.exports = router;