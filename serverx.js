//y const express = require('express');
//y const app = express();
//y const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const helpers = require('./utils/helpers');
//y const hbs = exphbs.create({ helpers });
const routes = require('./controllers');
//y const sequelize = require('./config/connection');
//y const PORT = process.env.PORT || 3001;

//y app.engine('handlebars', hbs.engine);
//y //y app.set('view engine', 'handlebars');

app.use(session({
  secret: 'baseball',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

async function syncDatabase() {
  try {
    await sequelize.sync({ force: false });
    console.log('Database synchronized');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
}

//y syncDatabase().then(() => {
//y   app.listen(PORT, () => console.log('Now listening'));
//y });
