import { DataTypes } from "sequelize";

export default class PrincipleModel {

    constructor(sequelize){

        this.sequelize = sequelize;

        this.principleModel = this.sequelize.define(
            "principle",
            {
                principleId: {
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
                comments: {type: DataTypes.TEXT},
            },
            {
                indexes: [
                    {
                        fields: ["book", "chapter"]
                    }
                ]
            }
        );

        this.principleModel.sync();

    }
}