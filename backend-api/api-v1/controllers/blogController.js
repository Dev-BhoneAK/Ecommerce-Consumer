/**
 * @module blogController
 */

const blogService = require('../services/blogService');

exports.getAllBlogs = async (req, res, next) => {
    try {
        const blogs = await blogService.getAllBlogs();
        res.status(200).json(blogs);
    } catch (err) {
        next(err);
    }
};
