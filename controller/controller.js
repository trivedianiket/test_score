const Candidate = require('../model/candidate_model');
const CandidateTestScore = require('../model/test_score_model');

exports.findAllCandidateScore = (req, res) => {
    CandidateTestScore.find()
        .then(candidateScore => {
            var newCandScore;
            var prevCandScore;
            var candidate;
            candidateScore.map((totalscore, i) => {
                newCandScore = parseInt(totalscore.firstRoundMarks ? totalscore.firstRoundMarks : 0) + parseInt(totalscore.secondRoundMarks ? totalscore.secondRoundMarks : 0) + parseInt(totalscore.thirdRoundMarks ? totalscore.thirdRoundMarks : 0)
                if (parseInt(prevCandScore ? prevCandScore : "0") > parseInt(newCandScore)) {
                    prevCandScore = prevCandScore;

                } else {
                    candidate = totalscore.email
                    prevCandScore = newCandScore;

                }
            })
            // res.send(candidateScore);
            res.send(candidate + " got hieghest marks. Marks => " + prevCandScore);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something went wrong while getting list of users."
            });
        });
};

exports.findHighestScore = (req, res) => {
    CandidateTestScore.find()
        .then(candidateScore => {
            var newCandScore;
            var prevCandScore;
            var candidate;
            var averageScore = 0;
            var num = 0;
            if (req.params.round == 1) {
                candidateScore.map((totalscore, i) => {
                    newCandScore = parseInt(totalscore.firstRoundMarks ? totalscore.firstRoundMarks : 0)
                    if (parseInt(prevCandScore ? prevCandScore : "0") > parseInt(newCandScore)) {
                        prevCandScore = prevCandScore;
                        averageScore = averageScore + newCandScore
                        num = num + 1


                    } else {
                        candidate = totalscore.email
                        prevCandScore = newCandScore;
                        averageScore = averageScore + prevCandScore
                        num = num + 1

                    }
                })
                averageScore = averageScore / num
                res.send(candidate + " got hieghest marks in first round. Marks => " + prevCandScore + " and averege score for first round" + averageScore);

            } else if (req.params.round == 2) {
                candidateScore.map((totalscore, i) => {
                    newCandScore = parseInt(totalscore.secondRoundMarks ? totalscore.secondRoundMarks : 0)
                    if (parseInt(prevCandScore ? prevCandScore : "0") > parseInt(newCandScore)) {
                        prevCandScore = prevCandScore;
                        averageScore = averageScore + newCandScore
                        num = num + 1
                    } else {
                        candidate = totalscore.email
                        prevCandScore = newCandScore;
                        averageScore = averageScore + prevCandScore
                        num = num + 1
                    }
                })
                averageScore = averageScore / num

                res.send(candidate + " got hieghest marks in second round. Marks => " + prevCandScore + " and averege score for second round " + averageScore);

            } else if (req.params.round == 3) {
                candidateScore.map((totalscore, i) => {
                    newCandScore = parseInt(totalscore.thirdRoundMarks ? totalscore.thirdRoundMarks : 0)
                    if (parseInt(prevCandScore ? prevCandScore : "0") > parseInt(newCandScore)) {
                        prevCandScore = prevCandScore;
                        averageScore = averageScore + newCandScore
                        num = num + 1
                    } else {
                        candidate = totalscore.email
                        prevCandScore = newCandScore;
                        averageScore = averageScore + prevCandScore
                        num = num + 1
                    }
                })
                averageScore = averageScore / num

                res.send(candidate + " got hieghest marks in third round. Marks => " + prevCandScore + " and averege score for third round " + averageScore);

            }


        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something went wrong while getting list of users."
            });
        });
};

exports.createCandidate = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Please fill all required field"
        });
    }

    const candidate = new Candidate({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address
    });
    candidate.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong while creating new user."
        });
    });
};


exports.createCandidateTestScore = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Please fill all required field"
        });
    }
    Candidate.findOne({ email: req.body.email }).then(candidate => {
        if (!candidate) {
            return res.status(404).send({
                message: "candidate not found with id " + req.params.round
            });
        } else {
            if (req.body.firstRoundMarks > 10) {
                return res.status(400).send({
                    message: "Please Enter first test mark out of 10"
                });
            } else if (req.body.secondRoundMarks > 10) {
                return res.status(400).send({
                    message: "Please Enter second test mark out of 10"
                });

            } else if (req.body.thirdRoundMarks > 10) {
                return res.status(400).send({
                    message: "Please enter third test mark out of 10"
                });
            } else {
                const candidateTestScore = new CandidateTestScore({
                    email: req.body.email,
                    firstRoundMarks: req.body.firstRoundMarks,
                    secondRoundMarks: req.body.secondRoundMarks,
                    thirdRoundMarks: req.body.thirdRoundMarks,
                    totalScore: parseInt(req.body.firstRoundMarks ? req.body.firstRoundMarks : 0) + parseInt(req.body.secondRoundMarks ? req.body.secondRoundMarks : 0) + parseInt(req.body.thirdRoundMarks ? req.body.thirdRoundMarks : 0)
                });
                candidateTestScore.save().then(data => {
                    res.send(data);
                }).catch(err => {
                    res.status(500).send({
                        message: err.message || "Error while creating candidate Test Score."
                    });
                });

            }
        }
    })
};
