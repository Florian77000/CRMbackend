var express = require('express');
var router = express.Router();

require ("../models/connection")
const Client = require("../models/client")

router.get('/', (req, res) => {
    Client.find().then((data) => {
    res.json({result:true, data})
    })
});

router.get('/:id', (req,res) => {
    const id = req.params.id;
    Client.findById(id).then((data) => {
        res.json({result:true, data})
    })
});

router.post('/add', (req,res) => {
    const newClient = new Client ({
        name:req.body.name,
        phone : req.body.phone,
        address: {
            street : req.body.address.street,
            city : req.body.address.city,
        },
        cat:req.body.cat,
    })
    newClient.save().then(() => {
        res.json({result:true})
    })
})

router.delete('/:id/delete',(req,res) => {
    const id = req.params.id;
    Client.findByIdAndDelete(id).then((data) => {
        res.json({result:true})
    })
    })
    


module.exports = router;

