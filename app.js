var express = require('express');
var path = require('path');
var app = express();


app.set("view engine", 'ejs');

// ejs 사용안할경우 아래와같이 폴더 설정시 index.html render
// app.use(express.static(path.join(__dirname + '/public')));


app.get('/', function (req, res){
    res.render('main');
    console.log("/ ejs");
});

app.listen(4000, function(){
    console.log('Server On!');
});
