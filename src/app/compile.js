module.exports = function compile() {
    let compileButton = document.getElementById('button');
    console.log(compileButton);
    let para = document.createElement('p');
    para.appendChild(document.createTextNode('Successfully Compiled'));
    compileButton.appendChild(para);
}

