import { nav } from './nav';
import {foo} from './foo.ts'
import imgUrl from './icon.jpg';
import makeImg from './image';

const getFooter = () => import('./foot')

console.log(foo('test presets'));

document.body.appendChild(nav);
nav.addEventListener('click', () => {
    getFooter().then(defaultModule => {
        document.body.appendChild(defaultModule.footer);
    })
})
document.body.appendChild(makeImg(imgUrl));
