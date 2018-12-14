console.log("inside of routes.js");

const Restaraunts = require("../controllers/restaraunts");
const Reviews = require("../controllers/reviews");

module.exports = function(app){
    app.get("/restaraunts", Restaraunts.getAll);
    app.post("/restaraunt", Restaraunts.create);
    app.get("/restaraunt/:id", Restaraunts.getId);


    app.post('/restaraunt/:id/review', Reviews.addReview);


    
    app.put('/restaraunt/:id', Restaraunts.update);
    app.delete('/restaraunt/:id', Restaraunts.delete);

    app.get('/reviews', Reviews.getAllReviews);

}