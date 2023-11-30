const http  = require("http");
const server = http.createServer(function(req,res){
    const users = ["Node", "react",];
    const products = ["java script" , "bootstrap"]
 //console.log(req)
  const {url, method} = req;
  if(url === "/"&& method === "GET"){
     res.write("<h1>First server</h1>");
     res.end();
 }
 else if(url === "/users"){
    res.write(JSON.stringify(users))
    res.end();
 }
 else if(url === "/products"){
    res.write(JSON.stringify(products))
    res.end();
 }
 //console.log("url is :", url ,"method is:" , method, /* "And the 3rd one is :", aborted*/);
console.log("Bismillah, We have created our first server");
})

server.listen(4000);
//console.log(http);