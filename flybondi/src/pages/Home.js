// src/pages/Home.js
import Header from '../templates/Header.js';

const Home = () => {
  const container = document.createElement('div');

  container.appendChild(Header());

  const main = document.createElement('main');
  main.classList.add('home');

  main.innerHTML = `
    <section>
      <p>
        Hola, soy Nelsona. Tengo $800 para gastar en pasajes de ida y vuelta.
        Quiero saber a qué lugares me puedo ir con ese presupuesto.
      </p>

      <form id="search-form">
        <label>
          Presupuesto total (ida y vuelta):
          <input type="number" name="budget" value="800" min="0" />
        </label>

        <label>
          Personas:
          <select name="people">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>

        <button type="submit">Ver destinos posibles</button>
      </form>
    </section>
  `;

  const form = main.querySelector('#search-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const budget = form.budget.value;
    const people = form.people.value;

    location.hash = `/results?budget=${encodeURIComponent(
      budget
    )}&people=${encodeURIComponent(people)}`;
  });

  container.appendChild(main);
  return container;
};

export default Home;
