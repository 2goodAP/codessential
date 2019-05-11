const CodeMirror = require('codemirror');

let codeditor = document.getElementById('codeditor');

let editor = CodeMirror.fromTextArea(codeditor, {
    lineNumbers: true,
    mode: CodeMirror.getMode('javascript')//'javascript'
});

console.log(CodeMirror);

module.exports.editor = editor;
