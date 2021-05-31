const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Account = new Schema({
   name: {
      type: String
   },
   bank: {
      type: String
   },
   AccountType: {
      type: String
   },
   AccountNo: {
      type: String
   }
}, {
   collection: 'accounts'
})

module.exports = mongoose.model('Account', Account)