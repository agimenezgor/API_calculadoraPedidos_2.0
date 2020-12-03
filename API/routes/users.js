var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserControllers');

/* GET users listing. */
router.get('/:email', UserController.getUser);
router.get('/', UserController.getAll);
router.post('/', UserController.register);
router.put('/:email', UserController.update);
router.delete('/:email', UserController.delete);

module.exports = router;
