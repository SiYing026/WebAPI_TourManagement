const connect =require('./FoodConnect')

connect.deleteMany().then(res=> {
    console.log("Successfully deleting all");
})