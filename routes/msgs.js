/**
 * Created by shia on 2/12/17.
 */
var express = require('express');
var router = express.Router();
var config = require('../config');
var twilioClient = require('../twilioClient');

/* GET users listing. */
router.post('/', function(req, res, next) {
    var text = req.body.text || 'default message';
    twilioClient.sendSms(config.numberTo, text, function(err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});

module.exports = router;
