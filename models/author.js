const BaseSQLModel = require('./base')

class AuthorModel extends BaseSQLModel {
    constructor() {
        super('author');
    } 

    async findAll() {
        const authors = await super.findAll()
        return authors
    } 

    async findOne(slug) {
        const author = await super.findOne('slug', slug)
        return author 
    } 
} 
module.exports = AuthorModel;