import { nav } from './nav';
import { footer } from './foot';
import imgUrl from './icon.jpg';
import makeImg from './image';

document.body.appendChild(nav);
document.body.appendChild(footer);
document.body.appendChild(makeImg(imgUrl));
