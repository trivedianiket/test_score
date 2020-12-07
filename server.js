const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const db = require('./config/db');
const mongoose = require('mongoose');
const userRoutes = require('./router/router')
app.use('/api', userRoutes)
mongoose.Promise = global.Promise;
mongoose.connect(db.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database.', err);
    process.exit();
});
app.get('/', (req, res) => {
    res.json({ "message": "Hello World" });
});

app.listen(port, () => {
    console.log(`Node server is listening on port ${port}`);
});