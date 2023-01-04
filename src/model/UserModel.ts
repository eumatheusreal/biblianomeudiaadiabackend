import { DataTypes } from "sequelize";

export default class UserModel{

    constructor(sequelize){

        this.sequelize = sequelize;

        this.userModel = this.sequelize.define(
            "user",
            {
                userId: {
                    type: DataTypes.UUIDV4,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true
                },
                name: {type: DataTypes.TEXT, allowNull: false},
                email: {type: DataTypes.TEXT, allowNull: false},
                phone: {type: DataTypes.TEXT, allowNull: false},
                password: {type: DataTypes.TEXT},
            },
            {}
        );

        this.userModel.sync();
    }
}