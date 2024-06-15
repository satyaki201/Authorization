const http = require('http');
const url = require('url');
const fs = require('fs');

const myserver = http.createServer((req, res) => {
    fs.appendFile('Data.txt', `${req.url} \n`, (err) => {
        if (err) {
            console.error(err);
            return;
        }

        const urlobj = url.parse(req.url, true);

        if (urlobj.pathname === '/contact') {
            {res.end(`Dhurr Bara Contack chudi ${urlobj.query.token1}`);
            }
        } else if (urlobj.pathname === '/') {
            res.end('Hello World');
        } else {
            res.end('Not Found');
        }

        console.log(urlobj);
    });
});

myserver.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
