// import * as gsap from 'gsap'
import { nav } from './nav';
import { foo } from './foo.ts';
import imgUrl from './icon.jpg';
import makeImg from './image';

const getFooter = () => import(/* webpackChunkName: "foot" */ './foot');
const getGSAP = () => import('gsap');
const getUniq = () => import('lodash-es/uniq');
// can't just provide color here
// folder path should be provided
let setColor
if (process.env.NODE_ENV === 'development') {
  setColor = color =>
    import(/* webpackMode: "lazy-once" */
    `./button-styles/${color}`);
} else {
  setColor = color => import(`./button-styles/${color}`);
}
console.log(foo('test presets'));

document.body.appendChild(nav);
const colors = ['red', 'green', 'blue'];
let cnt = 0;
nav.addEventListener('click', () => {
  getFooter().then(defaultModule => {
    document.body.appendChild(defaultModule.footer);
  });
  getGSAP().then(gsap => {
    console.log(gsap);
  });
  setColor(colors[cnt % 3]).then(colorModule => {
    nav.style = colorModule.default;
  });
  cnt++;
});
document.body.appendChild(makeImg(imgUrl));
