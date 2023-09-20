/**
 * @module blogController
 */

const brandService = require('../services/brandService');

// @desc    Get All Blogs
// @route   GET /api/v1/consumer/brands
// @access  Public
exports.getAllBrands = async (req, res, next) => {
    try {
        const brands = await brandService.getAllBrands();
        res.status(200).json(brands);
    } catch (err) {
        next(err);
    }
};
