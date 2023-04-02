const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add contact name"],
    },
    email: {
        type: String,
        required: [true, "Please add contact email"],
    },
    id: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
})
module.exports = mongoose.model('Contact', contactSchema)