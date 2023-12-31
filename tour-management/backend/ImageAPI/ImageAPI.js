const mongoose = require('mongoose');

const db = "mongodb+srv://tzixuan123:122Beytzixuan@gettingstarted.mulsiqn.mongodb.net/WebAssignment?retryWrites=true&w=majority";

mongoose.connect(db).then(()=> {
    console.log("Connected to database");
})

.catch(()=> {
    console.log("Can't connect to database");
})

const imageSchema = new mongoose.Schema({
    ID: { type: String},
    Type: { type: String},
    Tags: { type: String},
    PageURL: { type: String},
    Views: { type: String},
});

const connect = mongoose.model('image', imageSchema);

module.exports = connect;


const axios = require('axios');

const apikey = '37987349-e1b44ca993260273ed7b7c7e8';
const keyword = 'hotels';
const category = 'travel';

const querystr = `https://pixabay.com/api/?key=${apikey}&category=${category}&q=${keyword}`;


axios.get(querystr).then( (response) =>{
    ID = response.data.hits[1].id;
    Type = response.data.hits[1].type;
    Tags = response.data.hits[1].tags;
    PageURL = response.data.hits[1].pageURL;
    Views = response.data.hits[1].views;

    imageValue = new connect ({
        ID:response.data.hits[1].id,
        Type:response.data.hits[1].type,
        Tags:response.data.hits[1].tags,
        PageURL:response.data.hits[1].pageURL,
        Views:response.data.hits[1].views,
    });

    imageValue.save().then(result=> {
        console.log("Success" + result);
    })

    .catch(error=> {
        console.log("Error" + error);
    });
}
);