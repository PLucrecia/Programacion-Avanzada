// src/utils/getData.js
const DATA_URL = '/dataset.json'; // porque está en public/

export const getData = async () => {
  const res = await fetch(DATA_URL);
  if (!res.ok) {
    throw new Error('No se pudo cargar el dataset');
  }
  return res.json();
};
