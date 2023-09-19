var express = require('express');
var router = express.Router();
const brandRoutes = require('./brandRoutes');
const blogRoutes = require('./blogRoutes');

/* GET home page. */
router.use('/brands', brandRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;
