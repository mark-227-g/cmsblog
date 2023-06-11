const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const helperhbs=require('./views/helpers');
//const helpers = require('./utils/helpers');
const hbs = exphbs.create({});
const routes = require('./routes')
const controllers = require('./controllers')
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session({
  secret: 'baseball',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

app.use(controllers);
app.use(routes);

//app.use(require('./controllers/index.js'));





/*
async function syncDatabase() {
  try {
    await sequelize.sync({ force: false });
    console.log('Database synchronized');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
}
*/
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
