const bodyparser = require("body-parser");
const cors = require("cors");
const app = require("express")();
const mongoose = require("mongoose");
const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path")
const swagger = require("swagger-ui-express");
const globalConfig = require("./config");

const swaggerDocument = yaml.safeLoad(fs.readFileSync(path.resolve(`${__dirname}/swagger.yaml`), "utf8"));

const connect = mongoose.connect(`mongodb://${globalConfig.mongodb.username}:` +
`${globalConfig.mongodb.password}@${globalConfig.mongodb.host}/${globalConfig.mongodb.database}`);

app.use("/api-docs", swagger.serve, swagger.setup(swaggerDocument));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

require("./endpoints")(app);

connect.then(() => {
    app.listen(8000, () => {
        console.log(`Server running in port ${globalConfig.service.port}!`);
    });
});
