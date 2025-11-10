function deepEqual(a, b) {
  if (a === b) return true;

  if (Number.isNaN(a) && Number.isNaN(b)) return true;

  if (a == null || b == null) return false;

  const arrA = Array.isArray(a);
  const arrB = Array.isArray(b);
  if (arrA || arrB) {
    if (!(arrA && arrB)) return false;          
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false;
    }
    return true;
  }

  if (typeof a === 'object' && typeof b === 'object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;

    for (const k of keysA) {
      if (!Object.prototype.hasOwnProperty.call(b, k)) return false;
      if (!deepEqual(a[k], b[k])) return false;
    }
    return true;
  }

  return false;
}

console.log(deepEqual({x:[1,2]}, {x:[1,2]})); 
console.log(deepEqual({x:1}, {x:'1'}));       

