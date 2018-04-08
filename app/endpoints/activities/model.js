const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    activity_type: String,
    user_id: String,
    start_time: Date,
    end_time: Date,
    start_coordinates: { lat: Number, long: Number},
    end_coordinates: { lat: Number, long: Number},
    calories: Number,
});

const Activities = mongoose.model("Activities", schema);

module.exports = Activities;