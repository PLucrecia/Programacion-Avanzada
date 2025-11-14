// src/pages/Error404.js
import Header from '../templates/Header.js';

const Error404 = () => {
  const container = document.createElement('div');
  container.appendChild(Header());

  const main = document.createElement('main');
  main.classList.add('error');

  main.innerHTML = `
    <h2>Ups, esta página no existe</h2>
    <p>Volvé a la <a href="#/">pantalla principal</a>.</p>
  `;

  container.appendChild(main);
  return container;
};

export default Error404;
