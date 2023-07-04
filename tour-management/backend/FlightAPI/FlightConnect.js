const mongoose = require('mongoose');

const db = "mongodb+srv://tzixuan123:122Beytzixuan@gettingstarted.mulsiqn.mongodb.net/WebAssignment?retryWrites=true&w=majority";

mongoose.connect(db).then(()=> {
    console.log("Connected to database");
})

.catch(()=> {
    console.log("Can't connect to database");
})

const flightSchema = new mongoose.Schema({
    Id: { type: String},
    DepartureTime: { type: String},
    ArrivalTime: { type: String},
    Duration: { type: String},
});

const connect = mongoose.model('flight', flightSchema);

module.exports = connect;