const isAuthed = require("../modules/jwt/isAuthed");

module.exports = function(app) {
    require("./users/routes")(app);
    app.use(isAuthed);
    require("./activities/routes")(app);
}