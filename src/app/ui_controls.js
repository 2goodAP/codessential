import '../../node_modules/@fortawesome/fontawesome-free/js/all.min';
import {editor} from './editor';

// Show popup menus
export function showPopup(settings, popup) {
    popup.style.display = 'block';
    event.target.addEventListener('blur', () => {
        popup.style.display = 'none';
    });
    settings.appendChild(popup);
}

export function toggleTheme(event) {
    let output = document.querySelector('.output-container');
    let popupContent = document.querySelector('.popup-content');
    if (event.target.textContent.toLowerCase() == 'lightness') {
        editor.setOption('theme', 'mdn-like');
        document.body.style.background = '#fff';
        document.body.style.color = '#000';
        output.style.background = '#eee';
        output.style.color = '#000';
        popupContent.style.boxShadow = `-2px -2px 5px #dbdee1,
                                        2px -2px 5px #dbdee1,
                                        -2px 2px 5px #dbdee1,
                                        2px 2px 5px #dbdee1`;
    } else if (event.target.textContent.toLowerCase() == 'darkness') {
        editor.setOption('theme', 'railscasts');
        document.body.style.background = '#20262e';
        document.body.style.color = '#fff';
        output.style.background = '#272822';
        output.style.color = '#fff';
        popupContent.style.boxShadow = `-2px -2px 5px #232931,
                                        2px -2px 5px #232931,
                                        -2px 2px 5px #232931,
                                        2px 2px 5px #232931`;
    }
}

