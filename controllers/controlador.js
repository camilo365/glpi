import { config } from '../bd/db.js'

export async function datos(){

    try {
        const conexion = await config()
        const [rows, fields] = await conexion.execute('SELECT * FROM glpi_plugin_fields_computermaquinarias');
        console.log(rows)
        return rows
    } catch (error) {
        console.error('error al traer los datos', error)
        console.log()
        throw error;
    }
} 