function sumUnique(nums) {
    const unicos = new Set();
    for (const num of nums) {
        if (typeof num === 'number' && Number.isFinite(num)) unicos.add(num);
    }
    let suma = 0;
    for (const num of unicos) {
        suma += num;
    }
    return suma;
}

console.log(sumUnique([1, 2, 3, 2, 4, 5, 1])); // Devuelve 15
console.log(sumUnique([1, '2', 3, null, 4, 5, 1])); // Devuelve 13
console.log(sumUnique([1, 2, 3, 2, 4, 5, 1, NaN, Infinity])); // Devuelve 15
console.log(sumUnique(['a', 'b', 'c'])); // Devuelve 0