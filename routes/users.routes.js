const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

// Create a new user
router.post('/', userController.register);

// login a user
router.post('/login', userController.login);

// get all users
router.get('/', userController.getUsers);

// get a specific user by id
router.get('/:id', userController.getUserById);

// update user by id
router.put('/:id', userController.updateUser);

// delete user by id
router.delete('/:id', userController.deleteUser);

module.exports = router;