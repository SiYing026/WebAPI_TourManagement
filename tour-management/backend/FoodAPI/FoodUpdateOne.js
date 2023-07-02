const connect = require('./FoodConnect')

connect.updateOne({ImageType:"jpg"}, {Type:"png"}).then(res=> {
    console.log("Successfully update");
});