const CodeMirror = require('codemirror');

let editor = CodeMirror(document.body);
console.log(typeof CodeMirror);
console.log(typeof editor);
console.log(Object.keys(editor));
console.log('Is it even working');

console.log(editor);

// const codessential = document.getElementById('codessential');
// let editor = CodeMirror.fromTextArea(codessential, {
//     lineNumbers: true
// });
