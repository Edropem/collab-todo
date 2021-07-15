"use strict";
import { Model } from 'sequelize'

interface ItemAttributes {
    itemId: string
    description: string
    completed: boolean
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Item extends Model<ItemAttributes> implements ItemAttributes {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        itemId!: string;
        description!: string;
        completed!: boolean;

        static associate(models: any) {
            // define association here

        }
    }
    Item.init(
        {
            itemId: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false
            },

            description: {
                type: DataTypes.STRING,
                allowNull: false
            },
            completed: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        },
        {
            sequelize,
            modelName: "Item",
        }
    );
    return Item;
};