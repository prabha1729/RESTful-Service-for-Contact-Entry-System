const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: {
        first: String,
        middle: String,
        last: String
    }
    ,
    address: {
        street: String,
        city: String,
        state: String,
        zip: String
    },
    phone: [mongoose.Schema({
        number: String,
        type: { type: String }
    }, { _id: false, id: false })],
    email: String
},
    {
        versionKey: false
    });

module.exports = mongoose.model('Contact', contactSchema);


