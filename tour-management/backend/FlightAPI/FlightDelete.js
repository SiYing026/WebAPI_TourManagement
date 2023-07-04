const connect = require('./FlightConnect')

connect.deleteMany().then(res=> {
    console.log("Successfully deleting all");
});