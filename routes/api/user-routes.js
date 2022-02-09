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

router.route('/').get(getAllUsers).post(createUsers);


router.route('/:userId').get(getUsersById).put(updateUsers).delete(deleteUsers);


router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend)


module.exports = router; 