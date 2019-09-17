const mongoose = require('mongoose');

const valueSchema = mongoose.Schema({
    value : String
}, {
    timestamps: true
});

module.exports = valueSchema;