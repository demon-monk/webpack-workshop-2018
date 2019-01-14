import { nav } from './nav';
import { footer } from './foot';
import {foo} from './foo.ts'
import imgUrl from './icon.jpg';
import makeImg from './image';

console.log(foo('test presets'));

document.body.appendChild(nav);
document.body.appendChild(footer);
document.body.appendChild(makeImg(imgUrl));
