const connect = require('./FlightConnect')

connect.deleteOne({Duration:"01h"}).then(res=> {
    console.log("Successfully deleting one");
});