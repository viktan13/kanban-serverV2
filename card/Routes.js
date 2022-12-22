const {Router} = require('express');
const cardGetAll = require("./cardGetAll");
const cardCreate = require("./cardCreate");
const cardUpdateById = require("./cardUpdateById");
const cardDelete = require("./cardDelete");


const router = Router();

router.get('/', cardGetAll);
router.post('/', cardCreate);
router.patch('/:cardId', cardUpdateById);
router.patch('/:cardId', cardDelete)

module.exports = router;