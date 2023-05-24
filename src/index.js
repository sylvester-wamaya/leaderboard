import _ from 'lodash';
import './style.css';
import display from './modules/display.js';
import form from './modules/form.js';

const section = document.createElement("section")


  const list = document.createElement('div');
  const input = document.createElement('div');
  list.innerHTML = display
  input.innerHTML = form


section.appendChild(list);
section.appendChild(input);
document.body.appendChild(section);