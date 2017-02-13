/**
 * Created by shia on 2/12/17.
 */
var express = require('express');
var router = express.Router();
var config = require('../config');
var twilioClient = require('../twilioClient');


/* GET users listing. */
router.post('/', function(req, response, next) {
    var textToSay = req.body.text || 'Hey please come back now';
    twilioClient.sendCall(config.numberTo, textToSay, req, function (err, res) {
        if (err) {
            response.send(err);
        } else {
            response.send(res);
        }
    });
});

router.get('/getXml', function(req, res, next) {
    var textToSay = req.query.textToSay || 'Hey please come back now';
    res.set('Content-Type', 'text/xml');
    res.send(twilioClient.getCallXml(textToSay));
});

module.exports = router;
