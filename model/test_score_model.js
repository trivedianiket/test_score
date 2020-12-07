const mongoose = require('mongoose');

const TestScoreSchema = mongoose.Schema({
    email: String,
    firstRoundMarks: String,
    secondRoundMarks: String,
    thirdRoundMarks: String,
    totalScore: String
}, {
    timestamps: true
});

module.exports = mongoose.model('TestScore', TestScoreSchema)