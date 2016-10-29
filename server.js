var express = require('express');
var app = express();
var firebase = require("firebase");
var csv = require("csv-to-array")


firebase.initializeApp({
    databaseURL: "https://echo-firebase.firebaseio.com"
});

var db = firebase.database();
var ref = db.ref();

app.get('/sorteio', function (req, res) {
    //var siren = ref.child("devices/siren");
    //siren.set(false);

    var columns = ["nome"];
    csv({
        file: "lista.csv",
        columns: columns
    }, function (err, array) {

        var low = 1;
        var high= array.length;
        var sorteado = Math.floor(Math.random() * (1 + high - low)) + low;

        res.end("Ganhador - "+array[sorteado].nome);

        console.log(false);

        setTimeout(function () {
            console.log('boo')
        }, 100)
        var end = Date.now() + 5000
        while (Date.now() < end) ;

        console.log(true);




    });







});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
});