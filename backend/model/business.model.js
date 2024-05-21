import { DataTypes } from 'sequelize';
import sequelize from '../db/dbConfig.js';
import User from './user.model.js';

const Business = sequelize.define('Business', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            isAlpha: true,
        },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    dob: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            notNull: true,
        },
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contact: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            isNumeric: true,
        },
    },

    address: {
        type: DataTypes.STRING,
    },
    additionalInformation: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

Business.belongsTo(User, { foreignKey: 'userId' });

sequelize.sync().then(() => {
    console.log('Business Table Created.');
}).catch(err => {
    console.log('Business table not create');
    console.error(err);
});

export default Business;
