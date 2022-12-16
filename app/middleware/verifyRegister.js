const db = require('../models');
const User = db.user;
checkDuplicateUsername = (req, res, next) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Username is already in use, unable to register"
            });
            return;
        }
    });
    next();
};

const verifyRegister = {
    checkDuplicateUsername: checkDuplicateUsername
}

module.exports = verifyRegister;