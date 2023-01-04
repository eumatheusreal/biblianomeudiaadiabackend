import { DataTypes } from "sequelize";

export default class PageModel{

    constructor(sequelize){

        this.sequelize = sequelize;

        this.pageModel = this.sequelize.define(
            "page",
            {
                pageId: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true
                },
                book: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                chapter: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                userId: {
                    type: DataTypes.UUIDV4,
                    allowNull: false,
                    references: {
                        model: "user",
                        key: "userId"
                    }
                }
            },
            {
                indexes: [
                    {
                        fields: ["book", "chapter"]
                    }
                ]
            }
        );

        this.pageModel.sync();
    }
}