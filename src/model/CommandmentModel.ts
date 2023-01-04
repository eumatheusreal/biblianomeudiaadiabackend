import { DataTypes } from "sequelize";

export default class CommandmentModel {

    constructor(sequelize){
        
        this.sequelize = sequelize;

        this.commandmentModel = this.sequelize.define(
            "commandment",
            {
                commandmentId: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true
                },
                pageId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: "Page",
                        key: "pageId"
                    }
                },
                book: {type: DataTypes.TEXT, allowNull: false},
                chapter: {type: DataTypes.INTEGER, allowNull: false},
                initialVerse: {type: DataTypes.INTEGER, allowNull: false},
                finalVerse: {type: DataTypes.INTEGER, allowNull: false},
                text: {type: DataTypes.TEXT},
                comment: {type: DataTypes.TEXT}
            },
            {indexes: [{fields: ["book", "chapter"]}]}
        );

        this.commandmentModel.sync();
    }
}