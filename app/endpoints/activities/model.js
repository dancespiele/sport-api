const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    user_id: Number,
    start_time: Number,
    end_time: Number,
    start_coordinates: { lat: Number, long: Number},
    end_coordinates: { lat: Number, long: Number},
    calories: Number,
    activity_type: String
});

const Activities = mongoose.model("Activities", schema);
