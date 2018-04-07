const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    id: Number,
    full_name: String,
    password: String,
});

const User = mongoose.model("user", schema);

module.exports = User;