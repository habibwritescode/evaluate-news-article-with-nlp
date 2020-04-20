const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

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

app.listen(3030, function() {
    console.log('Example app listening on port 3030!')
})


app.post('/article', makeRequest.getArticle);