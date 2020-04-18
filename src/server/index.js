const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mockAPIResponse = require('./mockAPI.js');

var aylien = require("aylien_textapi");
// set aylien API credentials
// NOTICE that textapi is the name I used, but it is arbitrary.
// You could call it aylienapi, nlp, or anything else, 
//   just make sure to make that change universally!
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function(req, res) {
    res.sendFile('dist/index.html');
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function(req, res) {
    res.send(mockAPIResponse)
})


app.post('/article', getArticle);

function getArticle(req, res) {
    textapi.sentiment({
            url: req.body.url
        },
        function(error, response) {
            res.send(response);
        }
    );
}