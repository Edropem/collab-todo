"use strict";
import { Model } from 'sequelize'

interface ListAttributes {
    listId: string
    name: string
}

module.exports = (sequelize: any, DataTypes: any) => {
    class List extends Model<ListAttributes> implements ListAttributes {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        listId!: string;
        name!: string;

        static associate(models: any) {
            // define association here

        }
    }
    List.init(
        {
            listId: {
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
            modelName: "List",
        }
    );
    return List;
};