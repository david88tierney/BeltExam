console.log("inside of restaraunt.js controller");

const mongoose = require("mongoose");
const Restaraunt = mongoose.model("Restaraunt");

class Restaraunts {

    // Gets all Restaraunt
    getAll(req, res){
        Restaraunt.find({}).sort({"avgreview" : -1}).exec( function(err, restaraunts){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }else{
                res.json({"status": "ok", "restaraunts": restaraunts});
            }
        });
    }

    // Create a new Restaraunt
    create(req, res){
        let restaraunt = new Restaraunt(req.body);
        restaraunt.save(function(err){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }else{
                res.json({"status": "ok"});
            }
        });
    }

    // Get one specific Restaraunt
    getId(req, res){
        Restaraunt.findOne({_id: req.params.id}, function(err, restaraunt){
          if(err){
              res.json({"status": "not ok", "errors": err});
          }
          else{
              res.json({"status": "ok", "restaraunt": restaraunt});
          }
        })
    }

    // Update one specific Restaraunt
    update(req, res){
        Restaraunt.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true}, function(err){
          if(err){
              res.json({"status": "not ok", "errors": err});
          }else{
              res.json({"status": "ok"});
          }
        })
      }

      delete(req, res){
        Restaraunt.remove({_id: req.params.id}, function(err){
          if(err){
              res.json({"status": "not ok", "errors": err});
          }else{
              res.json({"status": "ok"});
          }
        })
      }




}



module.exports = new Restaraunts();