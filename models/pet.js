var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var petsSchema = new Schema({
  name:String,
  type:String,
  age:Number,
  imageUrl:String
});


var Pet = mongoose.model('pets', petsSchema);
module.exports = Pet;
