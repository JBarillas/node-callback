var fs = require('fs')
//Read file function
function callback  (err,data) {
    if (err){
        return console.error(err);
    }
}

function call (err){
    if (err){
        console.log(err);
    }
    
}
function readFile(){
    //fs.readFile("./fileTest", function (err, data) {
    var buffer = fs.readFile("./fileTest",callback )
    var textPlain = data.toString();
    var lines = textPlain.split('\n')
    var total = [];
    for (let i = 0;i<lines.lenght;i++){
        total.push(Count(lines[i]));
    }
    fs.writeFile('/final.txt',lines,call)
    console.log("log guardado")
    console.log(lines);
}

function Count(str){
    return str.split(' ').lenght;
}

readFile();