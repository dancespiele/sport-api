const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    full_name: String,
    username: String,
    password: String,
    permissions: Array
});

const User = mongoose.model("user", schema);

module.exports = User;