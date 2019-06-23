const CodeMirror = require('codemirror');
import '../../node_modules/codemirror/lib/codemirror.css';
import '../../node_modules/codemirror/addon/hint/show-hint.css';
import '../../node_modules/codemirror/mode/javascript/javascript';
import '../../node_modules/codemirror/addon/hint/show-hint';
import '../../node_modules/codemirror/addon/hint/javascript-hint';
import '../../node_modules/codemirror/addon/edit/closebrackets';
import '../../node_modules/codemirror/addon/edit/matchbrackets';
import '../css/main.css';

let codeditor = document.querySelector('#codeditor');
let outputNode = document.querySelector('.output');

export let editor = CodeMirror.fromTextArea(codeditor, {
    lineNumbers: true,
    mode: 'javascript',
    theme: 'monokai',
    extraKeys: {
        'Ctrl-Space': 'autocomplete'
    },
    matchBrackets: true,
    autoCloseBrackets: true
});


document.querySelector('.run').addEventListener('click', event => {
    editor.save();
    fetch('http://localhost:8000/runcode', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'text/plain',
            Accept: 'text/plain'
        },
        body: codeditor.value
    })
        .catch(err => {
            outputNode.style.color = 'red';
            return outputNode.innerText = err.message;
        })
        .then(res => {
            if (res.ok) {
                outputNode.style.color = '#fff';
            } else {
                outputNode.style.color = 'red';
            }
            res.text().catch(err => {
                outputNode.innerText = err.message;
            }).then(output => {
                if (output.startsWith('Error')) {
                    let errStart = output.indexOf('\n') + 1;
                    let errEnd = output.indexOf('at');
                    outputNode.style.color = 'red';
                    return outputNode.innerText = output
                        .substring(errStart, errEnd);
                }
                outputNode.innerText = output;
                return output;
            });
        });
});

