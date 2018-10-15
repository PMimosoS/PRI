var app = require('http').createServer(createServer);
var fs = require('fs'); 
var url = require('url');

function createServer(req, res) {
    var q =url.parse(req.url,true)
    var number = q.pathname.substring(6)
    var path = url.parse(req.url).pathname;
    var fsCallback = function(erro, dados) {
        if(!erro)
            res.write(dados)
        else
            res.write(erro)
            res.end() 
    }

    switch(path) {
        case '/obram'+number:
            console.log("Obra:"+ number)
            fs.readFile(__dirname + '/website/html/obram'+ number +'.html', fsCallback);
        break;
        case '/obras':
            console.log("Obras")
            fs.readFile(__dirname + '/website/index.html', fsCallback);   
        break;
        default:
            fs.readFile(__dirname + '/website/index.html', fsCallback);
    }
}

app.listen(7777);
console.log("Servidor na porta 7777")