import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { agregarEmpresa, editarEmpresa, eliminarEmpresa, obtenerEmpresa, obtenerEmpresas } from './controllers.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('La API del Sistema de Gestion Empresarial está activa');
});

app.post('api/empresas', agregarEmpresa);
app.get('api/empresas', obtenerEmpresas);
app.get('api/empresas/:id', obtenerEmpresa);
app.put('api/empresas/:id', editarEmpresa);
app.delete('api/empresas/:id', eliminarEmpresa);

app.listen(PORT, () => {
    console.log(`El servidor se está ejecutando en el puerto ${PORT}`);
});