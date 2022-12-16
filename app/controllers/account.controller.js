const db = require('../models');
const models = require('../models');
const Account = models.account;
const Op = db.Sequelize.Op;

exports.listAccounts = async (req, res) => {
    try {
        const accounts = await Account.findAll();
        let listAccounts = accounts.map(u => ({
            accountId: u.accountId,
            userId: u.userId,
            balance: u.balance
        }));
        return res.status(200).send(listAccounts);
    } catch (err) {
        return console.log(err);
    }
}

exports.getAccountByUserId = async (req, res) => {
    try {
        const account = await Account.findOne({
            where: { userId: req.params.userId }
        });
        if (account !== null) {
            return res.status(200).send(account);
        }
    } catch (err) {
        console.log(err);
        return res.status(404).send("Account not found.")
    }
}

