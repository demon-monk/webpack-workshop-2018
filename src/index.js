// import * as gsap from 'gsap'
import { nav } from './nav';
import { foo } from './foo.ts';
import imgUrl from './icon.jpg';
import makeImg from './image';

const getFooter = () => import('./foot');
const getGSAP = () => import('gsap');
const getUniq = () => import('lodash-es/uniq');
console.log(foo('test presets'));

document.body.appendChild(nav);
nav.addEventListener('click', () => {
  getFooter().then(defaultModule => {
    document.body.appendChild(defaultModule.footer);
  });
  getGSAP().then(gsap => {
    console.log(gsap);
  });
});
document.body.appendChild(makeImg(imgUrl));
