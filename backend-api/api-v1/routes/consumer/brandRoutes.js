const express = require('express');
const router = express.Router();

const brandController = require('../../controllers/brandController');

// @desc  Get All Brands
// @access  Public
router.get('/', brandController.getAllBrands);

module.exports = router;
