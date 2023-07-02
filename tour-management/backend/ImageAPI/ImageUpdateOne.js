const connect = require('./ImageConnect')

connect.updateOne({Type:"photo"}, {Type:"gif"}).then(res=> {
    console.log("Successfully update");
});