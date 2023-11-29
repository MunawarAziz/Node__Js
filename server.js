const http = require("http");
const fs = require("fs");
const {generatehtml} = require("./Shtml");
// const { buffer } = require("stream/consumers");


 function requestHandler(req,res){
    console.log(req.body)
    const {url, method} = req;

    if(url === "/" && method === "GET"){
        res.statuscode = 200;
        res.end(generatehtml("Email App ", "<h1>subscribe to newletter</h1><form method='POST'action='/subscribe'> <input type='text'placeholder='enter your email'name='email'/><button>subscribe</button>"))

    }else if(url === '/subscribe' && method === 'POST'){
        const data = []
        req.on("data", function(chunk){
          data.push(chunk);

        })
        req.on("end", function(){
            const result = Buffer.concat(data).toString()
            fs.writeFileSync("GenerateFile", result)
            res.end(result);
        })

    }else{
        res.statuscode = 404;
        res.end(generatehtml("Error", "<h1>page not found</h1>"));
    }
}    
   

const server = http.createServer(requestHandler);

// server.on("request", function(req, res){
//     console.log(req.url);
//     console.log(req.method);
//     res.write("Alright")
//     res.end();
// })
server.listen(5000);