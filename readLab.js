var fs = require('fs')
//Read file function
function callback  (err,data) {
    if (err) return console.error(err);
    var textPlain = data.toString();
    var lines = Texplain.split('\n')
    var total = [];
    for (let i = 0;i<lines.lenght;i++){
        total.push(Count(lines[i]));
    }
    fs.writeFile('./seprendio.txt',lines,(err)=>{
        if (err){
            console.log(err);
        }
        console.log("guardado")
        console.log(lines);
    })
    
}

function call (err){
    if (err){
        console.log(err);
    }
    
}
function readFile(){
    //fs.readFile("./fileTest", function (err, data) {
    var buffer = fs.readFile("./fileTest",callback )
}

function Count(str){
    return str.split(' ').lenght;
}

readFile();