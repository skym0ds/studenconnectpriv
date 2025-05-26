const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/asesorias', require('./routes/asesorias'));
app.use('/api/recursos', require('./routes/recursos'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor backend en http://localhost:${PORT}`));
