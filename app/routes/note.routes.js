var express = require('express');
const router = express.Router();
var notes = require('../controller/note.controller')

router.get('/', notes.findAll);
router.post('/', notes.createNote);
router.get('/:noteId', notes.findOne);
router.put('/:noteId', notes.updateNote);
router.delete('/:noteId', notes.delete);

module.exports = router;