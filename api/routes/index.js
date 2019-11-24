const routes = require("../constants/routes");

module.exports = app => {

  // lifecycle checks
  app.use(routes.health, require("../routes/health"));

  // form routes
  app.use(routes.postForm, require("../routes/postForm"))

  // db routes
  app.use(routes.values, require("../routes/values"))
  app.use(routes.newValue, require("../routes/newValue"))
  
  // note routes
  app.use(routes.addNote, require('../routes/addNote'))
};
