const express = require('express');
// const AccountDetails = require('../models/AccountDetails');
const app = express();
const accountDetailsRoute = express.Router();

// // Account model
let AccountDetails = require('../models/AccountDetails');

// Add  Account
accountDetailsRoute.route('/create').post((req, res, next) => {
  AccountDetails.create(req.body, (error, data) => {
    if (error) {
      return next(error)
      console.log(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Accounts
accountDetailsRoute.route('/').get((req, res) => {
  AccountDetails.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Account
accountDetailsRoute.route('/read/:id').get((req, res) => {
  AccountDetails.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Account
accountDetailsRoute.route('/update/:id').put((req, res, next) => {
  AccountDetails.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete Account
accountDetailsRoute.route('/delete/:id').delete((req, res, next) => {
  AccountDetails.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = accountDetailsRoute;