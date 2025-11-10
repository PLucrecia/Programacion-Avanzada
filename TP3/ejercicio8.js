function debounce(fn, delay) {
  let t;
  return function (...args) {
    clearTimeout(t);                
    t = setTimeout(() => fn.apply(this, args), delay); 
  };
}

function buscar(q) { console.log('buscando:', q); }

const dBuscar = debounce(buscar, 300);
dBuscar('h');
dBuscar('ho');
dBuscar('hol');
dBuscar('hola'); 
