const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define('account', {
        accountId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        balance: {
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: 1000.00,
            allowNull: false,
            validate: {
                min: 1.00,
                notNull: true
            }
        }
    }, {
        underscored: true
    });
    Account.associate = (models) => {
        Account.belongsTo(models.User);
    };
    Account.associate = (models) => {
        Account.hasMany(models.Transfer, { foreignKey: 'accountFromId', sourceKey: 'accountId' }, { foreignKey: 'accountToId', sourceKey: 'accountId' });
    }
    return Account;
}
