const express = require('express');
const router = express.Router();

router.get("/", function (req, res) {
    res.send("Welcome to the backend");
})

router.get("/data", function (req, res) {
    res.json({
        "data": "some data "
    })
})

module.exports = router;