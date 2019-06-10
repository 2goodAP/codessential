import '../../node_modules/@fortawesome/fontawesome-free/js/all.min';
import '../css/framazing.css';
import {editor} from './editor';

function createElt(nodeName, attrs, ...children) {
    let node = document.createElement(nodeName);
    for (let attr of Object.keys(attrs)) {
        node.setAttribute(attr, attrs[attr]);
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
    let drawer = document.querySelector('.drawer');
    let output = document.querySelector('.output');
    let popupContent = document.querySelector('.popup-content');
    if (event.target.textContent.toLowerCase() == 'lightness') {
        editor.setOption('theme', 'mdn-like');
        document.body.style.background = '#fff';
        document.body.style.color = '#000';
        drawer.style.background = '#eee';
        output.style.background = '#eee';
        drawer.style.color = '#000';
        output.style.color = '#000';
        popupContent.style.boxShadow = `-2px -2px 5px #dbdee1,
                                        2px -2px 5px #dbdee1,
                                        -2px 2px 5px #dbdee1,
                                        2px 2px 5px #dbdee1`;
    } else if (event.target.textContent.toLowerCase() == 'darkness') {
        editor.setOption('theme', 'monokai');
        document.body.style.background = '#20262e';
        document.body.style.color = '#fff';
        drawer.style.background = '#272822';
        output.style.background = '#272822';
        drawer.style.color = '#fff';
        output.style.color = '#fff';
        popupContent.style.boxShadow = `-2px -2px 5px #232931,
                                        2px -2px 5px #232931,
                                        -2px 2px 5px #232931,
                                        2px 2px 5px #232931`;
    }
}
