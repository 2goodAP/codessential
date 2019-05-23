const CodeMirror = require('codemirror');
import '../../node_modules/codemirror/mode/javascript/javascript';
import '../css/main.css';

let codeditor = document.getElementById('codeditor');

export let editor = CodeMirror.fromTextArea(codeditor, {
    lineNumbers: true,
    mode: 'javascript',
    theme: 'monokai'
});
