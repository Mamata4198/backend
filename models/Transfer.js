const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Transfer = new Schema({
   
   bank: {
      type: String
   },
   AccountNo: {
      type: String
   },
   ifsccode: {
    type: String
   },
   name: {
    type: String
   },
   amount: {
      type: String
     },
}, {
   collection: 'transfer'
})

module.exports = mongoose.model('Transfer', Transfer)