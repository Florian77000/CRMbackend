var express = require('express');
var router = express.Router();

require ("../models/connection")
const Client = require("../models/client")

router.get('/', (req, res) => {
    Client.find().then((data) => {
    res.json({result:true, data})
    })
});

module.exports = router;