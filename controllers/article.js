const articleDbModel = require('../models/article')
const articleModel = new articleDbModel();

class articleController {
    constructor() {
        const articles = []
    }

    async getAllArticles(req, res){
        const articles = await articleModel.findAll()
        res.status(201).json({articles: articles})
    }

    async getArticleBySlug(req, res){
        const article = await articleModel.findOne(req.params.slug)
        res.status(201).json({article: article})
    } 

    async createdNewArticle(req, res) {
        const newArticle = {
            name: req.body.name,
            slug: req.body.slug,
            image: req.body.image,
            body: req.body.body,
            published: new Date().toISOString().slice(0, 19).replace('T', ' '),
            author_id: req.body.author_id
        }
        const articleId = await articleModel.create(newArticle)
        res.status(201).json({
            message: `created article with id ${articleId}`,
            article: {id: articleId, ...newArticle}  
        })
    } 

    async updateArticle(req, res) {
        const editedArticle = {
            name: req.body.name,
            slug: req.body.slug,
            image: req.body.image,
            body: req.body.body,
            published: new Date().toISOString().slice(0, 19).replace('T', ' '),
            author_id: req.body.author_id
        }
        const newArticle = await articleModel.updateOne(req.params.id, editedArticle)
        res.status(201).json({
            message: `created article with id ${newArticle}`,
            article: {id: newArticle, ...editedArticle}  
        })
    } 
} 

module.exports = articleController

// const con = require('../utils/db');
// 
// const getAllArticles = ('/', (req, res) => {
//     let query = "SELECT * FROM article";
//     let articles = [];
//     con.query(query, (err, result) => {
//         if (err) {
//             throw err
//         } else {
//             articles = result
//             res.render('index',{ articles: articles });
//         }
//     })
// })
// 
// const getArticleBySlug = ('/article/:slug', (req, res) => {
//     let query = `SELECT author.name AS author, author_id AS author_id, article.image AS image, article.published AS published, article.name AS name, article.body AS body FROM article JOIN author ON article.author_id = author.id WHERE slug = "${req.params.slug}";`
//     let article = [];
//     con.query(query, [req.params.slug], (err, result) => {
//         if (err) throw err
//         article = result
//         res.render('article',{ article: article });
//     })
// })
// 
// const getArticlesByAuthor = ('/author/:id', (req, res) => {
//     let query = `SELECT author.name AS author, article.image AS image, article.name AS name, article.slug AS slug FROM article JOIN author ON article.author_id = author.id WHERE author_id = "${req.params.id}";`
//     let articles = [];
//     con.query(query, [req.params.id], (err, result) => {
//         if (err) throw err
//         articles = result
//         author = result[0].author
//         res.render('author',{ author: author, articles: articles });
//     })
// })
// 
// module.exports = {
//     getAllArticles,
//     getArticleBySlug,
//     getArticlesByAuthor
// }