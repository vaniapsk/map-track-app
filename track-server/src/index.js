require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

app.get('/', requireAuth, (req, res) => {
  res.status(200).send(`Your email: ${res.user.email}`);
});

const mongoUri =
  'mongodb+srv://admin:passwordpassword@cluster0.qmcakls.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoUri);
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connectiong to mongo:', err);
});

app.listen(3000, () => {
  console.log('App listining on 3000');
});
