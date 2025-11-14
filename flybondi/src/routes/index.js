// src/routes/index.js
import Home from '../pages/Home.js';
import Results from '../pages/Results.js';
import Error404 from '../pages/Error404.js';

const routes = {
  '/': Home,
  '/results': Results,
};

const router = () => {
  const [pathPart] = (location.hash.slice(1) || '/').split('?');
  const path = pathPart.toLowerCase() || '/';

  const Page = routes[path] || Error404;

  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(Page());
};

export default router;
