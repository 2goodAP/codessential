const CodeMirror = require('codemirror');
import '../../node_modules/codemirror/lib/codemirror.css';
import '../../node_modules/codemirror/addon/hint/show-hint.css';
import '../../node_modules/codemirror/mode/javascript/javascript';
import '../../node_modules/codemirror/addon/hint/show-hint';
import '../../node_modules/codemirror/addon/hint/javascript-hint';
import '../../node_modules/codemirror/addon/edit/closebrackets';
import '../../node_modules/codemirror/addon/edit/matchbrackets';
import '../../public/css/main.css';

let codeditor = document.querySelector('.codeditor');
let outputNode = document.querySelector('.output');

export let editor = CodeMirror.fromTextArea(codeditor, {
    lineNumbers: true,
    mode: 'javascript',
    theme: 'railscasts',
    extraKeys: {
        'Ctrl-Space': 'autocomplete'
    },
    matchBrackets: true,
    autoCloseBrackets: true
});


// Compiling and running the .js file
let compileWorker = new Worker('/js/compile_worker.js');

compileWorker.addEventListener('message', event => {
    let output = event.data;
    console.log(output);
    if (output.startsWith('Error')) {
        let errStart = output.indexOf('\n') + 1;
        let errEnd = output.indexOf('at');
        // if errEnd doesn't have 'at' use output.length
        errEnd = errEnd > -1 ? errEnd : output.length;

        outputNode.style.color = 'red';
        return outputNode.innerText = output
            .substring(errStart, errEnd);
    }
    outputNode.style.color = '#fff';
    outputNode.innerText = output;
});

// Log error to console
compileWorker.addEventListener('messageerror',
    event => {
        console.log('Oops! Something went wrong' + event.data);
    }
);

// Click Run button to run the code
document.querySelector('.run').addEventListener('click', event => {
    editor.save();
    compileWorker.postMessage(codeditor.value);
});
