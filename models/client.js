const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    name : String,
    phone : String,
    address : {
        street : String,
        city : String,
    },
    cat : String,
});

const Client = mongoose.model('clients', clientSchema);

module.exports = Client;