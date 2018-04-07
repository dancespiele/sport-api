const bodyparser = require("body-parser");
const app = require("express")();
const mongoose = require("mongoose");
const globalConfig = require("./config");

const connect = mongoose.connect(`mongodb://${globalConfig.mongodb.username}:` +
`${globalConfig.mongodb.password}@${globalConfig.mongodb.host}/${globalConfig.mongodb.database}`);

app.use(bodyparser.json());

require("./endpoints")(app);

connect.then(() => {
    app.listen(8000, () => {
        console.log(`Server running in port ${globalConfig.service.port}!`);
    });
})
