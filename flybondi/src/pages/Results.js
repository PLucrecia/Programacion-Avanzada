// src/pages/Results.js
import Header from '../templates/Header.js';
import { getData } from '../utils/getData.js';

const Results = () => {
  const container = document.createElement('div');
  container.appendChild(Header());

  const main = document.createElement('main');
  main.classList.add('results');
  main.innerHTML = `
    <h2>Resultados</h2>
    <div id="results-list">Cargando opciones para Nelsona...</div>
  `;

  container.appendChild(main);

  const params = new URLSearchParams(location.hash.split('?')[1] || '');
  const totalBudget = Number(params.get('budget') || 800);
  const people = Number(params.get('people') || 1);

  getData()
    .then((flights) => {
      const list = main.querySelector('#results-list');

      const validFlights = flights.filter(
        (f) => f.price * people <= totalBudget
      );

      if (!validFlights.length) {
        list.textContent =
          'No encontramos vuelos dentro de tu presupuesto. Probá con otro monto.';
        return;
      }

      list.innerHTML = '';
      validFlights.forEach((f) => {
        const card = document.createElement('article');
        card.classList.add('flight-card');

        const date = new Date(f.date);

        card.innerHTML = `
          <h3>${f.origin} ➜ ${f.destination}</h3>
          <p>Precio por persona: $${f.price.toFixed(2)}</p>
          <p>Personas: ${people}</p>
          <p>Total aprox: $${(f.price * people).toFixed(2)}</p>
          <p>Fecha: ${date.toLocaleString('es-AR')}</p>
          <p>Asientos disponibles: ${f.availability}</p>
        `;

        list.appendChild(card);
      });
    })
    .catch(() => {
      main.querySelector('#results-list').textContent =
        'Ocurrió un error cargando los datos 😢';
    });

  return container;
};

export default Results;
