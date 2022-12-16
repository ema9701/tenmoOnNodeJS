const db = require('../models');
const models = require('../models');
const Transfer = models.transfer;
const Account = models.account;
const Op = db.Sequelize.Op;



exports.listTransfers = async (req, res) => {
    try {
        const transfers = await Transfer.findAll({
            where: {
                accountFromId: req.id,
            }
        });
        return res.status(200).send(transfers);
    } catch (err) {
        console.log(err);
        return res.status(404).send("Something went wrong.")
    }
}

exports.getTransferById = async (req, res) => {
    try {
        const transfer = await Transfer.findByPk(req.params.transferId);
        if (transfer !== null) {
            return res.status(200).send(transfer);
        }
    } catch (err) {
        console.log(err);
        return res.status(404).send("Transfer not found.")
    }
}

exports.createTransfer = async (req, res) => {
    const account1 = await Account.findByPk(req.body.accountFromId);
    const account2 = await Account.findByPk(req.body.accountToId);
    const cash = req.body.amount;
    try {
        const result = await db.sequelize.transaction(async (t) => {
            const newTransfer = await Transfer.create({
                amount: cash,
                status: 'PENDING',
                accountFromId: account1.accountId,
                accountToId: account2.accountId
            }, { transaction: t });
            await Account.update({ balance: (+account1.balance) - (+cash) }, {
                where: {
                    accountId: account1.accountId
                }
            }, { transaction: t });
            await Account.update({ balance: (+account2.balance) + (+cash) }, {
                where: {
                    accountId: account2.accountId
                }
            }, { transaction: t });
            return res.status(201).send(newTransfer);
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send("Transfer failed");
    }

}

exports.updateTransferStatus = async (req, res) => {
    const id = req.params.transferId;
    try {
        const result = db.sequelize.transaction(async (t) => {
            const updatedTransfer = await Transfer.findByPk(id);
            if (!updatedTransfer) {
                return res.status(404).send("No transfer exists with that id");
            }
            await updatedTransfer.update(req.body, { transaction: t });
            return res.status(200).send(updatedTransfer);
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send("Error updating transfer");
    }
}


