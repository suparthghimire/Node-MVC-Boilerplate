const express = require("express");

const router = express.Router();

const controller = require("../controllers/IndexController");

router.get("/", controller.get_index);

module.exports = router;
