import './foot.css';
import email from './email';
// webpackPrefetch or webpackPreload only works at chunks that is not a direct child of the main chunk
// fixed @ https://github.com/MLoughry/webpack/commit/eefacf3f2a8bdb5506163932138786a03985390f
const loadGSAP = () =>
  import(/* webpackChunkName: "gsap", webpackPrefetch: true */
  'gsap');
const bottom = document.createElement('div');
bottom.innerText = 'bottom';
const footer = document.createElement('footer');
footer.appendChild(bottom);

footer.appendChild(email);
export { footer };
