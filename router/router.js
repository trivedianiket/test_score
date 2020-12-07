const express = require('express')
const router = express.Router()
const userController = require('../controller/controller');

router.get('/', userController.findAllCandidateScore);
router.get('/score/:round', userController.findHighestScore);
router.post('/CreateCandidate', userController.createCandidate);
router.post('/CreateCandidateScore', userController.createCandidateTestScore);
module.exports = router
