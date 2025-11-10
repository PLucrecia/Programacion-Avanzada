function groupBy(list, keyOrFn) {
  const getKey = typeof keyOrFn === 'function' ? keyOrFn : (item) => item?.[keyOrFn];
  const res = {};
  for (const item of list) {
    const k = getKey(item);
    (res[k] ??= []).push(item);
  }
  return res;
}

console.log(groupBy([{t:'a'},{t:'b'},{t:'a'}], 't')); 

console.log(groupBy([6,7,8,9], n => n%2?'impar':'par')); 