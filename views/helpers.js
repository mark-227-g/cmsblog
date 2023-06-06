const Handlebars = require('handlebars');

Handlebars.registerHelper('formatDate', function(date) {
    const formattedDate = new Date(date).toLocaleDateString();
  return formattedDate;
  return "newdate";
});

module.exports = Handlebars;