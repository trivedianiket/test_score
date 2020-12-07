const mongoose = require('mongoose');

const CandidateSchema = mongoose.Schema({
    name: String,
    email: String,
    address: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema)