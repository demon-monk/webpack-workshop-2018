import './foot.css';
import email from './email';

const bottom = document.createElement('div');
bottom.innerText = 'bottom';
const footer = document.createElement('footer');
footer.appendChild(bottom);

footer.appendChild(email);
export { footer };
