
const express = require('express');
const router = express.Router();
const path = require("path");
// index route loads view.html
// cms route loads cms.html
router.get("/exercise", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// blog route loads blog.html
router.get("/stats", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;