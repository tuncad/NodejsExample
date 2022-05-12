const express = require("express");

const router = express.Router();

const elementController = require("../controllers/elements");

router.get("/", elementController.getElements);

module.exports = router;
