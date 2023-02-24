# Add Candidate and Test Score 

## Run npm install

## run "node server.js or nodemon server.js to start" app

App is running on port 8080

## For Adding Candidate

Post Api
Url => http://localhost:8080/api/CreateCandidate

Payload => {
                "name":"Test",
                "email": "xyz@gmail.com",
                "address":"Lucknow"
            }


## For adding candidates run 

Post Api
Url => http://localhost:8080/api/CreateCandidateScore

payload => {
                "email": "example@gmail.com",
                "firstRoundMarks": "1",
                "secondRoundMarks": "5",
                "thirdRoundMarks": "3"
            }


## For get average score of 1st round

Get Api
Url => http://localhost:8080/api/score/1

## For get average score of 2nd round

Get Api
Url => http://localhost:8080/api/score/2

## For get average score of 3rd round

Get Api
Url => http://localhost:8080/api/score/3

## Get candidate who get highest marks in all round

Get Api
url => http://localhost:8080/api
