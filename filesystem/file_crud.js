const http = require('http');
const port = 9999;
 const fs=require('fs');
const e = require('express');
const server = http.createServer((req, res) => {
    const url = req.url;
    if (url == '/') {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<html><head><body><h1>File System using Node js HttpRequest</h1></body></head></html>`)
        res.end();
    }
    else if (url == "/create") {
        if (fs.existsSync("JS.txt")) {
            res.end("Already exist");
        }
        else {
            fs.writeFile("JS.txt", 'welcome to Javascript Fullstack cource!!!!!', (err) => {
                if (err) throw err
                else res.end('<html><head><body><h1>file created</h1></body></head></html>')
            });
        }
    }
    else if (url == "/read") {
        if (fs.existsSync("JS.txt")) {
            let data = fs.readFileSync('JS.txt');
            res.end(`<html><head><body><h1>${data.toString()}</h1></body></head></html>`)
        }
        else {
            res.end('<html><head><body><h1>File Is not exist Please create file </h1></body></head></html>')
        }
           
    }
    else if (url == "/append") {
        if (fs.existsSync("JS.txt")) {
            fs.appendFileSync("JS.txt", "This is a updated data");
            res.end('<html><head><body><h1>File Updated sucessfully!!!</h1></body></head></html>');
        }
        else {
            res.end('<html><head><body><h1>File Is not exist Please create file </h1></body></head></html>')
        }
           
    }
    
    else if (url == "/delete") {
        if (fs.existsSync("JS.txt")){
            fs.unlink("JS.txt", (err) => {
                if (err) throw err
                else {
                    res.end('<html><head><body><h1>File is Deleted sucessfully </h1></body></head></html>')
                }
        
            })
    }
    else {
        res.end('<html><head><body><h1>File is Not exist!!!! </h1></body></head></html>');
    }
      
}
    else
    {
     res.end('<Html><head><body><h2>Invalid request</h2></body></head></Html>');
        
    }
    
    })
server.listen(port, (err) => {
    if (err) throw err;
    else {
        console.log("server is wrorking with " + port);
    }
})