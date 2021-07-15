"use strict";
import { Model } from 'sequelize'

interface UserAttributes {
    userId: string
    name: string

}

module.exports = (sequelize: any, DataTypes: any) => {
    class User extends Model<UserAttributes> implements UserAttributes {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        userId!: string;
        name!: string;

        static associate(models: any) {
            // define association here

        }
    }
    User.init(
        {
            userId: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false
            },

            name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            sequelize,
            modelName: "User",
        }
    );
    return User;
};