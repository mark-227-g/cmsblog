const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');
const routes = require('./controllers')

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//app.use(require('./controllers/home-routes.js'));
app.use(routes);

/* from ste why?
app.use(session({
  secret: 'baseball',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
