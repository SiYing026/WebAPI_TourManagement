const connect = require('./FlightConnect')

connect.updateOne({Duration:"01h"}, {Duration:"02h"}).then(res=> {
    console.log("Successfully update");
});