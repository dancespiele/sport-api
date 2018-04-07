const isAuthed = require("../modules/jwt/isAuthed");

module.exports = function(app) {
    require("./user/middlewares")(app);
    app.use(isAuthed);
    require("./activities/middlewares")(app);
}