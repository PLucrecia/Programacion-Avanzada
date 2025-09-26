// server.js
require('dotenv').config();
const express = require('express');
const db = require('./src/db'); // <-- usa la conexión a Postgres

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// GET /users
app.get('/users', async (req, res) => {
  try {
    const { rows } = await db.query(
      'SELECT id, name, email, created_at FROM users ORDER BY id ASC'
    );
    res.json(rows);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'DB error' });
  }
});

// GET /users/:id
app.get('/users/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { rows } = await db.query(
      'SELECT id, name, email, created_at FROM users WHERE id = $1',
      [id]
    );
    if (rows.length === 0) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json(rows[0]);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'DB error' });
  }
});

// POST /users
app.post('/users', async (req, res) => {
  try {
    const { name, email } = req.body || {};
    if (!name || !email) return res.status(400).json({ error: 'Nombre y email son requeridos' });

    const { rows } = await db.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id, name, email, created_at',
      [name, email]
    );
    res.status(201).json(rows[0]);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'DB error' });
  }
});

// DELETE /users/:id
app.delete('/users/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { rowCount } = await db.query('DELETE FROM users WHERE id = $1', [id]);
    if (rowCount === 0) return res.status(404).json({ error: 'Usuario no encontrado' });
    return res.status(204).send();
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'DB error' });
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
