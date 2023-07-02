const mongoose = require('mongoose');

const db = "mongodb+srv://tzixuan123:122Beytzixuan@gettingstarted.mulsiqn.mongodb.net/WebAssignment?retryWrites=true&w=majority";

mongoose.connect(db).then(()=> {
    console.log("Connected to database");
})

.catch(()=> {
    console.log("Can't connect to database");
})

const foodSchema = new mongoose.Schema({
  Id: { type: String },
  Title: { type: String},
  Image: { type: String},
  ImageType : { type: String},
  RestaurantChain: { type: String},

});

const connect = mongoose.model('food', foodSchema);

module.exports = connect;