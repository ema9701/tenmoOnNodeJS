const db = require('../models');
const models = require('../models');
const User = models.user;
const Op = db.Sequelize.Op;

exports.listUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        const listUsers = users.map(u => ({
            id: u.id,
            username: u.username
        }));
        return res.status(200).send(listUsers)
    } catch (err) {
        console.log(err);
        return res.status(404).send("Something went wrong.")
    }
}
exports.findUserByUsername = async (req, res) => {
    try {
        const user = await User.findOne({ where: { username: req.params.username } });
        if (user !== null) {
            return res.status(200).send(user);
        }
    } catch (err) {
        console.log(err);
        return res.status(404).send("User not found.")
    }
}
