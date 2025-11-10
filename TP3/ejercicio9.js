
function withTimeout(promise, ms) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Timeout')), ms);
    Promise.resolve(promise).then(
      v => { clearTimeout(timer); resolve(v); },
      e => { clearTimeout(timer); reject(e); }
    );
  });
}

function allSettledLite(promises) {
  return Promise.all(
    promises.map(p =>
      Promise.resolve(p).then(
        value => ({ status: 'fulfilled', value }),
        reason => ({ status: 'rejected', reason })
      )
    )
  );
}

const ok = new Promise(r => setTimeout(() => r('listo'), 200));
const lento = new Promise(r => setTimeout(() => r('tarde'), 1000));

withTimeout(ok, 500).then(console.log).catch(console.error);   
withTimeout(lento, 300).then(console.log).catch(e => console.log(e.message)); 

const p1 = Promise.resolve(42);
const p2 = Promise.reject('ups');

allSettledLite([p1, p2]).then(console.log);
