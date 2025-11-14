import './src/styles/style.css';
import router from './src/routes/index.js';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);