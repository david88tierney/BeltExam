console.log('inside of  CONTROLLER reviews.js');

const mongoose = require("mongoose");
const Review = mongoose.model("Review");
const Restaraunt = mongoose.model("Restaraunt"); 

class Reviews{
    
    addReview(req, res){
        let review = new Review(req.body);
        review.save(function(err){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }else{
                Restaraunt.findOne({_id:req.params.id}, function(err, restaraunt){
                    restaraunt.reviews.push(review);
                    let total = 0;
                    for (let r of restaraunt.reviews){
                        total += r.rating;
                    }
                    restaraunt.avgreview = total/restaraunt.reviews.length;
                    restaraunt.save(function(err){
                        if (err){
                            res.json({"status": 'not ok', "errors": err});
                        }
                        else{
                            res.json({"status": 'ok'});
                        }

                    })
                })
            }
        });
    }
    getAllReviews(req, res){
        Review.find({}).sort({"avgreview" : -1}).exec( function(err, restaraunts){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }else{
                res.json({"status": "ok", "restaraunts": restaraunts});
            }
        });
    }
}



module.exports = new Reviews();