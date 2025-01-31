/* process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; */
import sql from 'mysql2/promise';
import { datos } from '../controllers/controlador.js';



export async function config(){

    try {
        const connection = await sql.createConnection({
            host: process.env.BD_DATABASE_B, 
            user: process.env.BD_USER_B,      
            password: process.env.BD_PASSWORD_B, 
            port: process.env.BD_PORT_B,      
            database: process.env.BD_NAME_B
        })
        console.log('conexion establecida')
        return connection;
    } catch (error) {
        console.error('error al conectar', error)
        console.log()
        throw error;
    }
} 





