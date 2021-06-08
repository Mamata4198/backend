const express = require('express');
const app = express();
const transferRoute = express.Router();

//Transfer model
let Transfer = require('../models/Transfer');

// Add Transfer
transferRoute.route('/create').post((req, res, next) => {
 Transfer.create(req.body, (error, data) => {
    if (error) {
      return next(error)
      console.log(error)
    } else {
      res.json(data)
    }
  })
});

// Get AllTransfers
transferRoute.route('/').get((req, res) => {
 Transfer.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get singleTransfer
transferRoute.route('/read/:id').get((req, res) => {
 Transfer.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// UpdateTransfer
transferRoute.route('/update/:id').put((req, res, next) => {
 Transfer.findByIdAndUpdate(req.params.id, {
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

// DeleteTransfer
transferRoute.route('/delete/:id').delete((req, res, next) => {
 Transfer.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = transferRoute;