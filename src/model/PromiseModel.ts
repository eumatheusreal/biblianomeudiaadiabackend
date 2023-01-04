import { DataTypes } from "sequelize";

export default class PromiseModel{

    constructor(sequelize){

        this.sequelize = sequelize;

        this.promiseModel = this.sequelize.define(
            "promise",
            {
                promiseId: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true
                },
                pageId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: "page",
                        key: "pageId"
                    }
                },
                book: {type: DataTypes.TEXT, allowNull: false},
                chapter: {type: DataTypes.TEXT, allowNull: false},
                initialVerse: {type: DataTypes.INTEGER, allowNull: false},
                finalVerse: {type: DataTypes.INTEGER},
                text: {type: DataTypes.TEXT},
                comment: {type: DataTypes.TEXT},
            },
            {
                indexes: [
                    {
                        fields: ["book", "chapter"]
                    }
                ]
            }
        );

        this.promiseModel.sync();
    }
}