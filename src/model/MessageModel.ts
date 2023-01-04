import { DataTypes } from "sequelize";

export default class MessageModel{

    constructor(sequelize){

        this.sequelize = sequelize;

        this.messageModel = this.sequelize.define(
            "message",
            {
                messageId: {
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
                message: {type: DataTypes.TEXT, allowNull: false}
            }
        );

        this.messageModel.sync();
    }

}