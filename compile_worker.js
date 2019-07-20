//
// A compile service worker
//

// Compiling and running the .js file
(function sendRequest() {
    let xhr = new XMLHttpRequest();
    let lastOutput = null;

    addEventListener('message', msg => {
        xhr.open('POST',
            `http://localhost:8000/runcode?${new Date().getTime()}`);
        // The query string is to 'bust the xhr request cache'

        xhr.setRequestHeader('Accept', 'text/plain');
        xhr.setRequestHeader('Content-Type', 'text/plain');

        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                let output = xhr.responseText;
                if (lastOutput !== output) {
                    lastOutput = output;
                    postMessage(output);
                }
            } else {
                postMessage(`Error: Status: ${xhr.status}, ` +
                `${xhr.statusText}`);
            }
        });
        xhr.addEventListener('error', event => {
            postMessage('Error: Cross-Origin Request Blocked. ' +
                'The Same Origin Policy disallows reading the remote ' +
                'resource. (Reason: CORS request did not succeed)');
        });

        let code = msg.data;
        xhr.send(code);
    });
})();
