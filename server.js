const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();
// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

//Route Definitions
app.use('/api/users', require('./routes/users.ts'));
app.use('/api/auth', require('./routes/auth.ts'));
app.use('/api/records', require('./routes/records.ts'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server has started on Port ${PORT}`));
