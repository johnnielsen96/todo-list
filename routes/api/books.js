const express = require ('express');
const router = express.Router ();

//Load Book Model
const Book = require ('../../models/Book');

router.get ('/test', (req, res) => res.send ('book route testing!'));

// @description Get all books
// @access Public
router.get ('/', (req, res) => {
  Book.find ()
    .then (books => res.json (books))
    .catch (err => res.status (404).json ({nobooksfound: 'No Books found'}));
});

// @description Get single book by id
// @access Public
router.get ('/:id', (req, res) => {
  Book.findById (req.params.id)
    .then (book => res.json (book))
    .catch (err => res.status (404).json ({nobookfound: 'No Book found'}));
});

// @description add/save book
// @access Public
router.post ('/', (req, res) => {
  Book.create (req.body)
    .then (book => res.json ({msg: 'Book added successfully'}))
    .catch (err => res.status (404).json ({error: 'Unable to add this book'}));
});

// @description update book
// @access public
router.put ('/:id', (req, res) => {
  Book.findByIdAndUpdate (req.params.id, req.body)
    .then (book => res.json ({msg: 'Updated Successfully'}))
    .catch (err =>
      res.status (404).json ({error: 'Unable to update the Database'})
    );
});

// @description Delete book by id
// @access Public
router.delete ('/:id', (req, res) => {
  Book.findByIdAndRemove (req.params.id, req.body)
    .then (book => res.json ({msg: 'Book entry deleted successfully'}))
    .catch (err => res.status (404).json ({error: 'No such a book'}));
});

module.exports = router;