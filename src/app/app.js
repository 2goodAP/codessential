import '../css/framazing.css';
import {editor} from './editor';
import {showPopup, toggleTheme} from './ui_controls';


// Popup menu
let popup = document.querySelector('.popup');
let settings = document.querySelector('.settings');
settings.addEventListener('focus', () => showPopup(settings, popup));

// Theming
let theme = document.querySelector('.theme');
theme.addEventListener('click', toggleTheme);

