var express = require("express");
var router = express.Router();
const brandRoutes = require("./brandRoutes");

/* GET home page. */
router.use("/brands", brandRoutes);

module.exports = router;
