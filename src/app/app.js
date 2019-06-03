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

let popup = createElt('div', {
    class: 'popup',
}, createElt('div', {
    class: 'popup-content',
}, document.createTextNode('popup')));
let settings = document.querySelector('.settings');

function showPopup(event) {
    // popup.style.top = `${settings
    //         .getBoundingClientRect().top + pageYOffset
    //         + settings.offsetHeight}px`;
    // popup.style.left = `${settings
    //         .getBoundingClientRect().left + pageXOffset
    //         + settings.offsetWidth / 4}px`;
    popup.style.display = 'block';

    settings.addEventListener('blur', () => {
        // settings.removeEventListener('focus', showpopup);
        popup.style.display = 'none';
    });
    settings.appendChild(popup);
}

settings.addEventListener('focus', showPopup);
