const mongoose = require('mongoose');

//Creation du schéma
const thingSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  imageUrl:{ type: String, required : true},
  description:{ type: String, required : true},
  likes:{ type: Number, required : true},
  usersLiked:{ type: ["String <userId>"], required : true},
  date : {type:Number, required: true}
});

module.exports = mongoose.model('Thing', thingSchema);