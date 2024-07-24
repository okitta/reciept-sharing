const User = require('../model/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//register a new user
const register = async (req, res) => {
    try {
        //check if the email is already registered
        const user = await User.getUserByEmail(req.body.email);
        if (user) {
            return res.status(400).send('Email already exists');
        }
        //generate a slat for the hash
        const salt = await bcrypt.genSalt(10);
        //hash the password
        req.body.password = await bcrypt.hash(req.body.password, salt);
        const newUser = await User.createUser(req.body);
        res.status(201).send(newUser);
    } catch (error) {
        res.status(400).send(error);
    }
}

//login a user

const login = async (req, res) => {
    try {
        //check if the email is registered
        const user = await User.getUserByEmail(req.body.email);
        if (!user) {
            return res.status(400).send('Email not found');
        }
        //compare the password
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).send('Invalid password');
        }
        //create a token
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET);
        res.status(200).header('auth-token', token).send({token,user});
    } catch (error) {
        res.status(400).send(error);
    }
}

//get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.getUsers();
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send(error);
    }
}

//get a specific user by id

const getUserById = async (req, res) => {
    try {
        const user = await User.getUserById(parseInt(req.params.id));
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
}

//update user by id

const updateUser = async (req, res) => {
    try {
        const user = await User.getUserById(parseInt(req.params.id));
        if (!user) {
            return res.status(404).send('User not found');
        }
        const updatedUser = await User.updateUser(parseInt(req.params.id), req.body);
        res.status(200).send(updatedUser);
    } catch (error) {
        res.status(400).send(error);
    }
}

//delete user by id

const deleteUser = async (req, res) => {
    try {
        const user = await User.getUserById(parseInt(req.params.id));
        if (!user) {
            return res.status(404).send('User not found');
        }
        await User.deleteUser(parseInt(req.params.id));
        res.status(204).send("User deleted");
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {
    register,
    login,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}