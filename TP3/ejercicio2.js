function pick(obj, keys) {
    const result = {};
    for (const key of keys) {
        if (key in obj) {
            result[key] = obj[key];
        }
    }
    return result;
}

console.log(pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])); // Devuelve { a: 1, c: 3 }
console.log(pick({ nombre: 'Lucre', edad: 21, ciudad: 'Colón' }, ['nombre', 'ciudad'])); // Devuelve { nombre: 'Lucre', ciudad: 'Colón' }