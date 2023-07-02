const mongoose = require('mongoose');

const db = "mongodb+srv://tzixuan123:122Beytzixuan@gettingstarted.mulsiqn.mongodb.net/WebAssignment?retryWrites=true&w=majority";

mongoose.connect(db).then(()=> {
    console.log("Connected to database");
})

.catch(()=> {
    console.log("Can't connect to database");
})

const newsSchema = new mongoose.Schema({
    Title: { type: String},
    Author: { type: String},
    Description: { type: String}
});

const connect = mongoose.model('news', newsSchema);

module.exports = connect;


const axios = require('axios');

const apikey = '63457778485f46269427c30a00a055ea';
const news = 'Vacation';

const querystr = `https://newsapi.org/v2/everything?q=${news}&apiKey=${apikey}`;


axios.get(querystr).then( (response) =>{
    Title = response.data.articles[0].title;
    Author = response.data.articles[0].author;
    Description = response.data.articles[0].description; 

    newsValue = new connect ({
        Title:response.data.articles[0].title,
        Author:response.data.articles[0].author,
        Description:response.data.articles[0].description
    });

    newsValue.save().then(result=> {
        console.log("Success" + result);
    })

    .catch(error=> {
        console.log("Error" + error);
    });
}
);
