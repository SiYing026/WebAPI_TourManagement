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
  ImageType: { type: String},
  RestaurantChain: { type: String},

});

const connect = mongoose.model('food', foodSchema);

module.exports = connect;


const axios = require('axios');

const apikey = '2fa32502866540eba52a6cde31b0904f';
const query = 'pizza';

const querystr = `https://api.spoonacular.com/food/menuItems/search?&apiKey=${apikey}&query=${query}&number=28`;


axios.get(querystr).then( (response) =>{
    Id = response.data.menuItems[0].id;
    Title = response.data.menuItems[0].title;
    Image = response.data.menuItems[0].image;
    ImageType = response.data.menuItems[0].imageType;
    RestaurantChain = response.data.menuItems[0].restaurantChain;

    foodValue = new connect ({
      Id:response.data.menuItems[0].id,
      Title:response.data.menuItems[0].title,
      Image:response.data.menuItems[0].image,
      ImageType: response.data.menuItems[0].imageType,
      RestaurantChain:response.data.menuItems[0].restaurantChain,
    });

    foodValue.save().then(result=> {
        console.log("Success" + result);
    })

    .catch(error=> {
        console.log("Error" + error);
    });
}
);