const mongoose = require('mongoose')
console.log("SERVER IS OK")
let DB
if(process.env.MONGODB_CONN){
    console.log("if")
     DB = process.env.MONGODB_CONN;
}else{
    console.log("else")
     DB = 'mongodb://localhost/Registration'
}
// console.log(process.env)

console.log(DB)

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log(`******************Connection successful******************`);
}).catch((err) => {
    console.log(`No connection`, err);
})