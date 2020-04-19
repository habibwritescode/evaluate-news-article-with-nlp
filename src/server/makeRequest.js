const aylien = require('aylien_textapi');

// Set aylien API credentials
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

function getArticle(req, res) {
    textapi.sentiment({
            url: req.body.url
        },
        function(error, response) {
            res.send(response);
        }
    );
}

function getText(req, res) {
    textapi.sentiment({
            text: req.body.url
        },
        function(error, response) {
            res.send(response);
        }
    );
}


exports.getArticle = getArticle;
exports.getText = getText;