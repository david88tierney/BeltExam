console.log("inside of review.js");

const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Name is required"], 
        maxlength: [255, "Name is too long"]
    },
    rating: {
        type: Number, 
        required: [true, "Rating is required"], 
        max: 5, 
        min: 1
    },
    comment: {
        type: String, 
        required: [true, "Comment is required"], 
        minlength: [10, "Comments must be at least 10 characters"]
    }
}, {timestamps: true});

mongoose.model('Review', ReviewSchema); 

module.exports = ReviewSchema;