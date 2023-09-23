var express = require('express');
var router = express.Router();
const brandRoutes = require('./brandRoutes');
const blogRoutes = require('./blogRoutes');

router.use('/brands', brandRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;
