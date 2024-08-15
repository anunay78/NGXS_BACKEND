const mongoose = require('mongoose');
const employeeSchema  = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    mobile:String,
    salary:String
})
module.exports = mongoose.model('employee',employeeSchema);