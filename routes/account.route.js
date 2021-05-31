const express = require('express');
const app = express();
const accountRoute = express.Router();

// Account model
let Account = require('../models/Account');

// Add  Account
accountRoute.route('/create').post((req, res, next) => {
  Account.create(req.body, (error, data) => {
    if (error) {
      return next(error)
      console.log(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Accounts
accountRoute.route('/').get((req, res) => {
  Account.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Account
accountRoute.route('/read/:id').get((req, res) => {
  Account.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Account
accountRoute.route('/update/:id').put((req, res, next) => {
  Account.findByIdAndUpdate(req.params.id, {
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
accountRoute.route('/delete/:id').delete((req, res, next) => {
  Account.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = accountRoute;