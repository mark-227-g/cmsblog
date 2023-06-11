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


const middleware = (req, res, next) => {
 // console.log("middleware")
//  console.log(req.session.loggedIn);
  if(req.session.loggedIn){
    let currentDate=new Date();
   // console.log(typeof(req.session.lastActivity)+" "+req.session.lastActivity)
    let lastDate= new Date(req.session.lastActivity);
 //  console.log(lastDate+"    "+lastDate.getDate())
  //  console.log(currentDate.getTime() +" === "+lastDate.getTime())
    
    let timeDifference = ((currentDate.getTime() - lastDate.getTime())/1000)/30;
 //   console.log("time diff: "+timeDifference);
    
    if (timeDifference>15) {
      req.session.loggedIn=false;
    }
  //  else {
 //   req.session.lastActivity = currentDate;
 //   }

    
  }
  
  // Built-in express method to call the next middleware in the stack.
  next();
};

app.use(middleware);
app.use(controllers);
app.use(routes);





sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
