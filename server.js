console.clear();
const express = require('express');
const chalk = require('chalk');

const connectDB = require('./config/db');

const userRoute = require('./routes/api/users');
const profileRoute = require('./routes/api/profile');
const postRoute = require('./routes/api/posts');
const authRoute = require('./routes/api/auth');

const app = express();

//DB conneaction
connectDB();

//Middlewares
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API is running!!!'));

//Defined Routes
app.use('/api/users', userRoute);
app.use('/api/profile', profileRoute);
app.use('/api/posts', postRoute);
app.use('/api/auth', authRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(chalk.yellow('App listening on port 4000!'));
});
