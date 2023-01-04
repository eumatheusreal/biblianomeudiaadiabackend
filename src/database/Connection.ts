import { Sequelize } from "sequelize";
import dotenv from "dotenv";

export default class Connect{

    sequelize: Sequelize;

    constructor(){

        dotenv.config();

        const DATABASE_NAME = process.env.DATABASE_NAME!;
        const DATABASE_USERNAME = process.env.DATABASE_USERNAME!;
        const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD!;
        const DATABASE_HOST = process.env.DATABASE_HOST!;

        this.sequelize = new Sequelize(
            DATABASE_NAME,
            DATABASE_USERNAME,
            DATABASE_PASSWORD, 
            {
                host: DATABASE_HOST,
                dialect: "mysql"
            }
        );

    }

    async connect(){
        return this.sequelize;
    };

    async disconnet(){
        this.sequelize.close();
    };

}