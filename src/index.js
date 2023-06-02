import './style.css';
import listing from './modules/scores.js';
import { formSection, postData } from './modules/formSection.js';

const section = document.createElement('main');

section.appendChild(listing());
section.appendChild(formSection());
document.body.appendChild(section);
postData();
