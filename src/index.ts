import dotenv from "dotenv";
import Connection from "./database/Connection";


dotenv.config();


async function testa(){
    let connection = new Connection();
    let sequelize = await connection.connect();
}

testa();