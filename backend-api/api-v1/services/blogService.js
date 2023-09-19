/**
 * @module blogService
 */

const blogModel = require('../models/blogModel');

// @desc    Get All Blogs
// @controller   getAllBlogs
exports.getAllBlogs = async () => {
    const blogs = await blogModel.find().sort({ publishedDate: -1 });
    return blogs;
};
