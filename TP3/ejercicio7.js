function wordFreq(text) {
  if (typeof text !== 'string') throw new TypeError('text debe ser string');
  const cleaned = text.toLowerCase().replace(/[,\.\:\;\!\?]/g, ' ');
  const freq = new Map();
  for (const w of cleaned.split(/\s+/).filter(Boolean)) {
    freq.set(w, (freq.get(w) || 0) + 1);
  }
  return freq;
}

const m = wordFreq("Hola hola! como estas? chau chau");
console.log(Object.fromEntries(m));
