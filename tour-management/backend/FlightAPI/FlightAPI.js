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


const axios = require('axios');

const apikey = '64a24cdaa12b580eaa69fea2';

const querystr = `https://api.flightapi.io/onewaytrip/${apikey}/HEL/OUL/2023-07-20/1/0/0/Economy/USD`;

axios.get(querystr).then( (response) =>{
    Id = response.data.legs[0].id;
    DepartureTime = response.data.legs[0].departureTime;
    ArrivalTime = response.data.legs[0].arrivalTime;
    Duration = response.data.legs[0].duration;

    flightValue = new connect ({
        Id : response.data.legs[0].id,
        DepartureTime : response.data.legs[0].departureTime,
        ArrivalTime : response.data.legs[0].arrivalTime,
        Duration : response.data.legs[0].duration,
    });

    flightValue.save().then(result=> {
        console.log("Success" + result);
    })

    .catch(error=> {
        console.log("Error" + error);
    });
}
);