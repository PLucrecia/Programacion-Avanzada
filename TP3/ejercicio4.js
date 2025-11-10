function sortByMany(list, specs) {
  if (!Array.isArray(list)) throw new TypeError('list debe ser un array');
  if (!Array.isArray(specs)) throw new TypeError('specs debe ser un array');

  const rules = specs.map(({ key, dir }) => ({
    key,
    dir: dir === 'desc' ? -1 : 1
  }));

  const get = (obj, key) => obj?.[key];

  const cmp = (a, b) => {
    if (a === b) return 0;
    if (a == null) return 1;        
    if (b == null) return -1;
    if (typeof a === 'string' && typeof b === 'string') {
      return a.localeCompare(b);     
    }
    return a < b ? -1 : 1;           
  };

  return [...list].sort((x, y) => {
    for (const { key, dir } of rules) {
      const c = cmp(get(x, key), get(y, key));
      if (c !== 0) return c * dir;
    }
    return 0; 
  });
}

const users = [
  { firstName: 'Ana', lastName: 'Zapata', age: 30 },
  { firstName: 'Luis', lastName: 'Alvarez', age: 25 },
  { firstName: 'Luis', lastName: 'Alvarez', age: 32 },
  { firstName: 'Bea', lastName: 'Alvarez', age: 25 },
];

const specs = [
  { key: 'lastName', dir: 'asc' },
  { key: 'age', dir: 'desc' },
];

console.log(sortByMany(users, specs));
