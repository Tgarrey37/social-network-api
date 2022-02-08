const router = require('express').Router();

const {
    getAllUsers,
    getUsersById,
    createUsers,
    deleteUsers,
    updateUsers,
    addFriend,
    deleteFriend
} = require("../../controllers/users-controller");

