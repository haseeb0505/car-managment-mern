const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({

    type: {
        type: String,
        required: true,
        unique: true,
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('category', CategorySchema);