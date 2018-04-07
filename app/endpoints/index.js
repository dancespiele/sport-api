const isAuthed = require("../modules/jwt/isAuthed");

module.exports = function(app) {
    require("./user/routes")(app);
    app.use(isAuthed);
    require("./activities/routes")(app);
}