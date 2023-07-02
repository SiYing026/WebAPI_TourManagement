const connect = require('./NewsConnect')

connect.deleteOne({Author:"Gabbi Shaw"}).then(res=> {
    console.log("Success deleting one");
});