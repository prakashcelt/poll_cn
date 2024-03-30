
const mongoose = require('mongoose');
uri = process.env.MONGODB_URL


// Code for using the cloud mongodb atlas 
// const connectParams={
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }

mongoose.connect(uri);
// Code for manually using the mongodb of local system

const db = mongoose.connection

db.on('error', console.error.bind(console, 'error connecting to database'));

db.once('open', ()=>{
    console.log("successfully connected to database : mongoDB");
});

module.exports = db;