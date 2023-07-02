const connect = require('./FoodConnect')

connect.deleteOne({Id:"374973"}).then(res => {
    console.log("Successfully deleting one");
});