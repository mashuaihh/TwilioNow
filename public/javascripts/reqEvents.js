/**
 *
 * Created by shia on 2/12/17.
 */

$(document).ready(function () {
    //call
    $('#callBtn').click(function (e) {
        e.preventDefault();
        $.post("/calls", function (response) {
            console.log(response);
        });
    });
    $('#callCustomBtn').click(function (e) {
        e.preventDefault();
        var text = $('#callTextArea').val();
        if (text === '') {
            window.alert("Put in some words please");
            return;
        }
        var data = {text: text};
        $.post("/calls", data, function (response) {
            console.log(response);
        });
    });


    //message
    $('#messageBtn').click(function (e) {
        e.preventDefault();
        $.post("/msgs", function (response) {
            console.log(response);
        });
    });

    $('#messageCustomBtn').click(function (e) {
        e.preventDefault();
        var text = $('#messageTextArea').val();
        if (text === '') {
            window.alert("Put in some words please");
            return;
        }
        var data = {text: text};
        $.post("/msgs", data, function (response) {
            console.log(response);
        });
    });
});