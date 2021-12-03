const mongoose = require('mongoose');
const Schema =  mongoose.Schema
const studentSchema = new Schema({
  subscribed: {
    type: Boolean,
    default: false
},
name: {
    type: String
},
email:{
    type: String,
    unique:[true, "Email is already present"],
},
password: {
    type: String
},
exam: {
    type: String
},
following: [{
    type: Schema.Types.ObjectId,
    ref: 'Mentor',
}],
avator: {
  type: String
}
});
mongoose.models = {}
module.exports = mongoose.model('students', studentSchema);
 