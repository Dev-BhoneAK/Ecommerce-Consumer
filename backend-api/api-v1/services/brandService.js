/**
 * @module blogService
 */

const brandModel = require('../models/brandModel');

// @desc    Get All Brands
// @controller  getAllBrands
exports.getAllBrands = async () => {
    const brands = await brandModel.find({});
    return brands;
};
