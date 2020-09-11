const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the Vinyl Library API' })
);

//Route Definitions
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/records', require('./routes/records'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server has started on Port ${PORT}`));
