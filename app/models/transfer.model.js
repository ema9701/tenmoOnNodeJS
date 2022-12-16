const { DataTypes } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    const Transfer = sequelize.define('transfer', {
        transferId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                min: 1.00,
                notNull: true
            }
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: 'PENDING',
        }
    }, {
        underscored: true
    });
    Transfer.associate = (models) => {
        Transfer.belongsTo(models.Account, { foreignKey: 'accountFromId', sourceKey: 'accountId' }
        )
    }
    Transfer.associate = (models) => {
        Transfer.belongsTo(models.Account, { foreignKey: 'accountToId', sourceKey: 'accountId' })
    }
    return Transfer;
}