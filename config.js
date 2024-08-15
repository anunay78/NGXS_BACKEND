const mongoose  = require('mongoose');
mongoose.connect('mongodb+srv://anunay:wF9sDCFjwVN9px7M@cluster0.6cilppr.mongodb.net/empDb?retryWrites=true&w=majority').then(()=>{
    console.log('Database Connected succcessfully')
}).catch((err)=>{
    console.log('Error while connecting database',err);
})
module.exports = mongoose;