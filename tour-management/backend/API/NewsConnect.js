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