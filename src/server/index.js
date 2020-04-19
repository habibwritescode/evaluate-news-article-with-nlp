const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const mockAPIResponse = require('./mockAPI.js');
const makeRequest = require('./makeRequest');


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
app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})

app.get('/test', function(req, res) {
    res.send(mockAPIResponse)
})


app.post('/article', makeRequest.getArticle);