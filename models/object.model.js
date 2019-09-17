const mongoose = require('mongoose');
const valueSchema = require('./value.model.js');
const ObjectSchema = mongoose.Schema({
    url: String,
    time:[
        valueSchema
    ]

}, {
    timestamps: false
});

module.exports = mongoose.model('url', ObjectSchema);