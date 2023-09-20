const express = require('express');
const router = express.Router();

const blogController = require('../../controllers/blogController');

// @desc  Get All Blogs
// @access  Public
router.get('/', blogController.getAllBlogs);

module.exports = router;
