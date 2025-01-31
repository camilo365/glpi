import express from 'express'
import bodyParser from 'body-parser'; 
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const port = 3000;
import { config } from './bd/db.js';
import { datos } from './controllers/controlador.js';


app.use(cors());
app.use(bodyParser.json());

config();
datos();

app.listen(port, () => {
    console.log(`Servidor de Node.js corriendo en http://localhost:${port}`);
});
