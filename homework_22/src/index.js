import $ from "jquery";

import './index.css'

import image from './images/1.jpg'
import image1 from './images/2.jpg'



const img = document.createElement('img');
const img1 = document.createElement('img');

img.setAttribute('src', image);
document.querySelector('body').appendChild(img);

img1.setAttribute('src', image1);
document.querySelector('body').appendChild(img1);
