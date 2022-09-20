document.querySelector('main').remove();

const newHeader = document.createElement('h1')
newHeader.id = 'victory';

let body = document.querySelector('body');
body.appendChild(newHeader)

newHeader.textContent = "YOUR-NAME is the champion"