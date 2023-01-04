import { DataTypes } from "sequelize";

export default class ApplyModel {

    constructor(sequelize){
        this.sequelize = sequelize;

        this.applyModel = this.sequelize.define(
            "apply",
            {
                applyId: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true
                },
                text: {
                    type: DataTypes.TEXT,
                    allowNull: false
                },
                pageId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: "Page",
                        key: "pageId"
                    }
                }
            }
        );

        this.applyModel.sync();
    }

}