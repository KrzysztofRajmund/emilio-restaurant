const express = require('express');
const router = express.Router();

//load user model
const Menu = require('../../models/Menu');

//POST
router.post('/post', (req, res) => {
  //validate request
  if (
    !req.body.type ||
    !req.body.category ||
    !req.body.title ||
    !req.body.price
  ) {
    return res.status(400).send({
      success: false,
      message: 'Wszystkie pola (w wyjątkiem opisu) są wymagane!',
    });
  }
  //create a product
  let menu = new Menu({
    type: req.body.type,
    category: req.body.category,
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
  });
  //save product in database
  // menu
  //   .save()
  //   .then((data) => res.json(data))
  //   .catch((err) => console.log(err));
  menu
    .save()
    .then((data) => {
      let successMessage = 'Produkt został dodany pomyślnie';
      res.send({
        success: true,
        message: successMessage,
        data: data,
      });
    })
    .catch((err) => console.log(err));
});

//GET ALL
router.get('/get', (req, res) => {
  Menu.find()
    .sort({ date: -1 })
    // .then((data) => console.log(data, 'req'))
    .then((data) => {
      let message = '';
      if (data === undefined || data.length == 0) {
        message = 'Nie znaleziono żadnego produktu';
      } else {
        message = `Znaleziono ${data.length} produktów`;
      }
      res.send({
        success: true,
        message: message,
        data: data,
      });
    })
    .catch((error) => {
      res.status(500).send({
        success: false,
        message: error.message || 'Błąd',
      });
    });
});

//DELETE PRODUCT
router.delete('/delete/:id', (req, res) => {
  Menu.findOneAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          succes: false,
          message: `Produkt o id:${req.params.id} nie zosyał znaleziony`,
        });
      }
      res.send({
        success: true,
        message: 'Produkt został usunięty pomyślnie',
      });
    })
    .catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          success: false,
          message: 'Product not found with id ' + req.params.id,
        });
      }
      return res.status(500).send({
        success: false,
        message: 'Could not delete product with id ' + req.params.id,
      });
    });
});

//EDIT PRODUCT
router.put('/update/:id', (req, res) => {
  //validate request
  if (
    !req.body.type ||
    !req.body.category ||
    !req.body.title ||
    !req.body.price
  ) {
    return res.status(400).send({
      success: false,
      message: 'Wszystkie pola (z wyjątkiem opisu) są wymagane!',
    });
  }
  Menu.findOneAndUpdate(req.params.id, { $set: req.body }, { new: true })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          succes: false,
          message: `Produkt o id:${req.params.id} nie został znaleziony`,
        });
      }
      res.send({
        success: true,
        message: 'Produkt został wyedytowany',
      });
    })
    .catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          success: false,
          message: 'Product not found with id ' + req.params.id,
        });
      }
      return res.status(500).send({
        success: false,
        message: 'Could not edit product with id ' + req.params.id,
      });
    });
});

module.exports = router;
