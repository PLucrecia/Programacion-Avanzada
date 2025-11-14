// src/templates/Header.js
const Header = () => {
  const header = document.createElement('header');
  header.classList.add('header');

  header.innerHTML = `
    <h1>Vacaciones para Nelsona</h1>
    <p>Buscá destinos dentro de tu presupuesto</p>
  `;

  return header;
};

export default Header;
