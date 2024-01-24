const express = require('express');
const router = express.Router();
const articleControllerClass = require('../controllers/article');

const articleController = new articleControllerClass()

router.get('/', (req, res) => articleController.getAllArticles(req, res));
router.get('/article/:slug', (req, res) => articleController.getArticleBySlug(req, res));

module.exports = router;

// const express = require('express');
// 
// const router = express.Router();
// 
// const articleController = require('../controllers/article');
// 
// router.get('/', articleController.getAllArticles);
// router.get('/article/:slug', articleController.getArticleBySlug);
// router.get('/author/:id', articleController.getArticlesByAuthor);
// 
// module.exports = router;