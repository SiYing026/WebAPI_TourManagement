const connect = require('./NewsConnect')

//replace the movies after adding comma
connect.updateOne({Author:"Melia Russell"}, {Author:"Zi Yee"}).then(res=> {
    console.log("Successfully update");
});