import '../../node_modules/@fortawesome/fontawesome-free/js/all.min';
import '../css/framazing.css';
import {editor} from './editor';

function createElt(nodeName, attrs, ...children) {
    let node = document.createElement(nodeName);
    for (let attr of Object.keys(attrs)) {
        node.setAttribute(attr, attrs[attr]);
        console.log(attr)
        console.log(attrs[attr])
    }
    for (let child of children) {
        node.appendChild(child);
    }
    return node;
}

let popup = document.querySelector('.popup');
let settings = document.querySelector('.settings');

function showPopup(event) {
    popup.style.display = 'block';
    settings.addEventListener('blur', () => {
        popup.style.display = 'none';
    });
    settings.appendChild(popup);
}

settings.addEventListener('focus', showPopup);

// Theming
let theme = document.querySelector('.theme');

theme.addEventListener('click', toggleTheme);

function toggleTheme(event) {
    if (event.target.textContent.toLowerCase() == 'lightness') {
        editor.setOption('theme', 'mdn-like');
    } else if (event.target.textContent.toLowerCase() == 'darkness') {
        editor.setOption('theme', 'monokai');
    }
}
