const http = require('http');


const server = http.createServer((req, res) =>{
    const url = req.url;
    //const method = req.method;
    if (url === "/"){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>First Assignment</title></head>');
        res.write('<body><form action="/user" method="POST">Username<input type="text" name="username"><button type="submit" value="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === "/users"){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>First Assignment</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === "/create-user"){
        const body = [];

        req.on('data', part =>{
            body.push(part);
        });

        req.on('end',() =>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
});

server.listen(3000);