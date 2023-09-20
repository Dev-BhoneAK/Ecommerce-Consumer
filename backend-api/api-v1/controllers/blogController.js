/**
 * @module blogController
 */

const blogService = require('../services/blogService');

// @desc    Get All Blogs
// @route   GET /api/v1/consumer/blogs
// @access  Public
exports.getAllBlogs = async (req, res, next) => {
    try {
        const blogs = await blogService.getAllBlogs();
        res.status(200).json(blogs);
    } catch (err) {
        next(err);
    }
};
