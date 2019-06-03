// const CodeMirror = require('codemirror');

// let codeditor = document.getElementById('codeditor');

// let editor = CodeMirror.fromTextArea(codeditor, {
//     lineNumbers: true,
//     //mode: CodeMirror.getMode('javascript')//'javascript'
//     mode: 'javascript',
//     theme: 'monokai'
// });
// console.log(editor.mode);

// console.log(Codemirror.mode)

// module.exports.editor = editor;
const CodeMirror = require('codemirror');
import '../../node_modules/codemirror/lib/codemirror.css';
import '../../node_modules/codemirror/addon/hint/show-hint.css';
import '../../node_modules/codemirror/mode/javascript/javascript';
import '../../node_modules/codemirror/addon/hint/show-hint';
import '../../node_modules/codemirror/addon/hint/javascript-hint';
import '../../node_modules/codemirror/addon/edit/closebrackets';
import '../../node_modules/codemirror/addon/edit/matchbrackets';
import '../css/main.css';

let codeditor = document.getElementById('codeditor');

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
