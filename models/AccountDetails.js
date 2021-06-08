const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let AccountDetails = new Schema({
   slNo: {
      type: String
   },
   transactionNo: {
      type: String
   },
   transaction: {
      type: String
   },
   credit: {
      type: String
   },
   debit: {
    type: String
 }
}, {
   collection: 'accountDetails'
})

module.exports = mongoose.model('AccountDetails', AccountDetails)