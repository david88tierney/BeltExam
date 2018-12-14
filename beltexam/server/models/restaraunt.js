console.log("inside of restaraunt.js");

const mongoose = require("mongoose");
const ReviewSchema = require("./review.js");

const RestarauntSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
        minlenth: [3, "Name needs at least three characters"]
    },

    cuisine: {
        type: String, 
        required: [true, "Cuisine is required."],
        minlenth: [3, "Cuisine needs at least three characters"]
    },

    reviews: [ReviewSchema],

    avgreview: {
        type: Number,
        default: 0
    }
});

mongoose.model("Restaraunt", RestarauntSchema);