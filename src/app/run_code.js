const {createServer} = require('http');
const {spawn, exec, execFile} = require('child_process');
const {createWriteStream, writeFile} = require('fs');
const {parse} = require('url');
const concat = require('concat-stream');

createServer((req, res) => {
    let {pathname} = parse(req.url, true);

    if (req.method === 'POST') {
        if (pathname === '/runcode') {
            createCodeFile(req, err => console.error(err));
            sendOutput(res, err => console.error(err));
        }
    } else if (req.method === 'GET') {
        if (pathname === '/runcode') {
            sendOutput(res, err => console.error(err));
        }
    } else {
        res.writeHead(405, 'Method Not Allowed');
    }
}).listen(8000, () => {
    console.log(`Server listening at port 8000`);
});

function createCodeFile(req, callback) {
    req.pipe(concat(code => {
        writeFile('codeFile.js', code, err => {
            if (err) {
                return callback(`Got error: ${err.message}`);
            }
        });
    }));
}

function sendOutput(res, callback) {
    res.writeHead(200, {
        'Access-Control-Allow-Origin': 'http://localhost:8080',
        'Content-Type': 'text/plain'
    });
    let nodeOnCode = execFile('node', ['codeFile.js'], {timeout: 500},
        (err, stdout, stderr) => {
            if (err) callback(err);

            console.log(stderr, stdout)
            if (stderr) res.write('Error: ' + stderr);
            res.write(stdout);
        }
    ).on('close', code => res.end(`\nExit Code: ${code}`));
}
