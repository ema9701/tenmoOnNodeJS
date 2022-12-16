const db = require('../models');
const config = require('../config/auth.config');
var jwt = require("jsonwebtoken");
var bcrypt = require('bcryptjs');
const models = require('../models');

const User = models.user;
const Account = models.account;
const Op = db.Sequelize.Op;

exports.register = async (req, res) => {
    try {
        const user = await User.create({
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, 8),
            account: [{}],
        }, {
            include: [models.account]
        });
        return res.status(201).send({
            message: "Registration complete!",
            id: user.id,
            username: user.username,
        })
    } catch (err) {
        console.log(err)
        return res.status(500).send({ message: "Error with registration" })
    }
}

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({
            where: ({
                username: req.body.username
            })
        })
        var correctPassword = bcrypt.compareSync(req.body.password, user.password);
        if (!user || !correctPassword) {
            return res.status(404).send({ accessToken: null, message: "Username or password incorrect!" })
        }
        var token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400
        });
        if (user && correctPassword) {
            return res.status(200).send({
                user,
                accessToken: token
            });
        }
    } catch (err) {
        console.log(err)
        return res.status(500).send({ accessToken: null, message: "Username or password incorrect" })
    }
}

