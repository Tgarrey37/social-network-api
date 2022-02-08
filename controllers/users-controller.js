const {Users} = require('../models');

const usersController = {
    createUsers({body}, res) {
        Users.create(body)
        .then(dbUsersData => res.status(400).json(dbUsersData))
        .catch(err => res.status(400).json(err));
    }
}