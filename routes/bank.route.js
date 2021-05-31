const express = require('express');
const app = express();
const bankRoute = express.Router();

// Bank model
let Bank = require('../models/Bank');

// Add  Bank
bankRoute.route('/create').post((req, res, next) => {
  Bank.create(req.body, (error, data) => {
    if (error) {
      return next(error)
      console.log(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Banks
bankRoute.route('/').get((req, res) => {
  Bank.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single bank
bankRoute.route('/read/:id').get((req, res) => {
  Bank.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update bank
bankRoute.route('/update/:id').put((req, res, next) => {
  Bank.findByIdAndUpdate(req.params.id, {
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

// Delete bank
bankRoute.route('/delete/:id').delete((req, res, next) => {
  Bank.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = bankRoute;