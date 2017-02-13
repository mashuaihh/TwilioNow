/**
 *
 * Created by shia on 2/12/17.
 */

var config = require('./config');
var twilio = require('twilio');
var client = twilio(config.accountSid, config.authToken);

module.exports.sendSms = function(to, message, fn) {
    client.messages.create({
        body: message,
        to: to,
        from: config.sendingNumber
//  mediaUrl: imageUrl
    }, function(err, data) {
        if (err) {
            console.error('Could not send the message');
            console.error(err);
            fn(err, data);
        } else {
            console.log('Message sent');
            fn(err, data);
        }
    });
};

module.exports.sendCall = function(to, textToSay, req, fn) {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    client.calls.create({
        from: config.sendingNumber,
        to: to,
        method: 'GET',
        url: fullUrl + "/getXml?textToSay=" + encodeURIComponent(textToSay)
    }, function(err, call) {
        if (err) {
            console.log(err);
            fn(err);
        } else {
            console.log("Called");
            fn(err, "Called");
        }
    });
};

module.exports.getCallXml = function(content) {
    var response = new twilio.TwimlResponse();
    response.say(content, {
        voice: 'woman',
        language: 'en-US'
    });
    return response.toString();
};