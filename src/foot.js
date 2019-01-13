const bottom = document.createElement('div');
bottom.innerText = 'bottom';
const footer = document.createElement('footer');
footer.appendChild(bottom);
const email = require('./email');
footer.appendChild(email.default);
module.exports = {
  footer,
};
