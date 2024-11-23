const userController = require('../controllers/userController');
const roleController = require('../controllers/roleController');

const express = require("express")

const router = new express.Router();

router.get('/users', userController.getUsers);
router.post('/users', userController.addUser);
router.put('/users/:id', userController.editUser);
router.delete('/users/:id', userController.deleteUser);

router.get('/roles', roleController.getRoles);
router.post('/roles', roleController.addRole);
router.put('/roles/:id', roleController.editRole);
router.delete('/roles/:id', roleController.deleteRole);

module.exports = router;