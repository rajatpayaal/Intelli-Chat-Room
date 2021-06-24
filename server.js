const http = require('http');
//last check -
//const hostname = 'localhost';
const fs = require('fs');
const moment = require('moment');
const hostname = 'localhost';
const port = 3000;
const bday = '2021-12-25';
console.log(moment(bday).format('LLLL'))
const server = http.createServer((req,res)=>{
   

  // console.log('request url',req.url)
  // console.log('request',req.method)
  //request object in node js 

// res.setHeader('contect-type','text/plan');
res.setHeader('contect-type','text/html');

let route="./view/";
switch (req.url) {
  case '/':
   // without moment #npm console.log(date);
    console.log("hii");
  
    route += 'index.html'
    res.statusCode= 200;
    break;

  case '/contact':
  route += 'contact.html'
  res.statusCode= 200;
    break;

    case '/contact-us':
      res.statusCode= 301
      res.setHeader('location','/contact');
      res.end();
        break;

 default:
    route +='404.html'
    res.statusCode= 404;
    break;
}



fs.readFile(route ,(err,data)=>{
  if(err){ //if else loop 
    console.log(err);
    res.end();
  
  }else{
    res.write(data);
    res.end();
  }
})
// res.write('<body class="app"></body>');
// res.write('<h3> i am rajat</h3>');
// res.write('<p>welcome to rajat site</p>');
});  

server.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
//run
