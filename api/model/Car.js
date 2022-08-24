const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,


    },
    categoryId: {
        type: String,
        required: true
    },
    ownerId: {
        type: String,
        required: true
    },
    model: {
        type: Number,
        required: true

    },
    color: {
        type: String,
        required: true,
    },
    make: {
        type: String,
        required: true,
    },
    registrationNo: {
        type: String,
        required: true,
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Car', CarSchema);