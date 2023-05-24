import './style.css';
import listing from './modules/scores.js';
import form from './modules/form.js';

const section = document.createElement('main');
const input = document.createElement('div');

input.innerHTML = form;

section.appendChild(listing());
section.appendChild(input);
document.body.appendChild(section);