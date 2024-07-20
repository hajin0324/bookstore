const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

router.use(express.json());

router.get("/", bookController.getAllBooks);

module.exports = router;