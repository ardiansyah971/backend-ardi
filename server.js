const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // <- WAJIB biar frontend bisa akses

app.use(express.json());

// Contoh endpoint
app.get('/products', (req, res) => {
  res.json([
    { id: 1, name: 'Beras', price: 10000 },
    { id: 2, name: 'Gula', price: 12000 }
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});