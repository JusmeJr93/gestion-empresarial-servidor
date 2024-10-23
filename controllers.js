import { dbConnection } from "./db.js";

const pool = dbConnection();

export const agregarEmpresa = async (req, res) => {
    const { nombre, fecha_constitucion, tipo_empresa, comentarios, favorita } = req.body;

    const fechaFormateada = new Date(fecha_constitucion).toISOString().split('T')[0]; //AAAA-MM-DD

    const sql = `INSERT INTO empresas (nombre, fecha_constitucion, tipo_empresa, comentarios, favorita) VALUES (?, ?, ?, ?, ?)`;

    try {
        const [results] = await pool.query(sql, [
            nombre,
            fechaFormateada,
            tipo_empresa,
            comentarios || '',
            favorita || false,
        ]);
        res.status(201).json({ id: results.insertId, message: 'Empresa creada exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hubo un error al crear la empresa' });
    }
};

export const obtenerEmpresas = async (req, res) => {
    const sql = 'SELECT * FROM empresas ORDER BY nombre';

    try {
        const [results] = await pool.query(sql);

        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hubo un error cargando las empresas' });
    }
};

export const obtenerEmpresa = async (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM empresas WHERE id = ?';

    try {
        const [results] = await pool.query(sql, [id]);

        if (results.length === 0) {
            return res.status(404).json({ error: 'Empresa no encontrada' });
        }

        res.status(200).json(results[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hubo un error cargando la empresa' });
    }
};

export const editarEmpresa = async (req, res) => {
    const { id } = req.params;
    const { nombre, fecha_constitucion, tipo_empresa, comentarios, favorita } = req.body;

    const fechaFormateada = new Date(fecha_constitucion).toISOString().split('T')[0];

    const sql = `UPDATE empresas SET nombre = ?, fecha_constitucion = ?, tipo_empresa = ?, comentarios = ?, favorita = ? WHERE id = ?`;

    try {
        await pool.query(sql, [
            nombre,
            fechaFormateada,
            tipo_empresa,
            comentarios || '',
            favorita || false, id
        ]);

        res.status(200).json({ message: 'Empresa editada exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hubo un error editando la empresa' });
    }
};

export const eliminarEmpresa = async (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM empresas WHERE id = ?';

    try {
        await pool.query(sql, [id]);
        res.status(200).json({ message: 'Empresa eliminada exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar la empresa' });
    }
};