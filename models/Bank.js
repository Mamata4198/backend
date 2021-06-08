const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Bank = new Schema({
   name: {
      type: String
   },
   branch: {
      type: String
   },
   ifsccode: {
      type: String
   },
   micrcode:{
      type: String
   },
   location: {
      type: String
   }
}, {
   collection: 'banks'
})

module.exports = mongoose.model('Bank', Bank)