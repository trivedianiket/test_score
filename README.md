# test_score

## Run npm install

## For Adding Cndidate
## Post Api

Url => http://localhost:8080/api/CreateCandidate

Payload => {
                "name":"xyz",
                "email": "xyz@gmail.com",
                "address":"xyz"
            }


## For adding candidates run 
## Post Api

Url => http://localhost:8080/api/CreateCandidateScore

payload => {
                "email": "example@gmail.com",
                "firstRoundMarks": "1",
                "secondRoundMarks": "5",
                "thirdRoundMarks": "3"
            }


## For get average score of 1st round
## Get Api

Url => http://localhost:8080/api/score/1

## For get average score of 2nd round
## Get Api

Url => http://localhost:8080/api/score/2

## For get average score of 3rd round
## Get Api

Url => http://localhost:8080/api/score/3

## Get candidate who get highest marks in all round
## Get Api

url => http://localhost:8080/api