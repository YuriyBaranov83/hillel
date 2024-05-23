import $ from "jquery";
import {btn} from './button/button';

import './index.css'

import image from './images/1.jpg'

btn();

const figure = document.createElement('img');

figure.setAttribute('src', image);
document.querySelector('body').appendChild(figure);
