var express = require('express');
var app = express();

app.use(express.static(__dirname + "/PokeAPIAngularApp/dist"));

app.listen(8000, function(){
    console.log("pokemonAPI Project listening on port 8000");
})