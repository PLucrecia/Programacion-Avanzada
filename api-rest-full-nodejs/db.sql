-- Crea tabla de ejemplo y carga datos
CREATE TABLE IF NOT EXISTS items (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO items (name) VALUES
('First item'),
('Second item');
