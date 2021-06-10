var express = require('express');
var router = express.Router();

// controllers
var notebook_controller = require('../controllers/notebookController.js');

// routes
router.get("/", notebook_controller.notebook_list);

// routes
router.get("/:id", notebook_controller.notebook_detail);


module.exports = router;