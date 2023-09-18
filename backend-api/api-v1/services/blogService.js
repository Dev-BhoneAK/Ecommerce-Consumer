const blogModel = require('../models/blogModel')
const { validationResult } = require('express-validator')

exports.createBlog = async (req, res, next) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            console.log(errors)
            return res.status(400).json({ errors: errors.array() })
        }
        const { title, content, author } = req.body
        const blog = await blogModel.create({
            title,
            content,
            author,
        })
        res.status(201).json({ blog })
    } catch (error) {
        next(error)
    }
}
