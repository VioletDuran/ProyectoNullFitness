const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'fugox123',
    database: 'web',
    port: '5432'
})

const getUsers =  async (req, res) => {
    const response = await pool.query('SELECT * FROM musculos');
    res.json(response.rows);
}

const registrarUsuario = async (req, res) => {
    const { nombre, nombreUsuario, edad, correo, contraseña} = req.body;
    await pool.query('INSERT INTO usuarios (tipousuario, correo, contraseña, nombreusuario, edad, nombre) VALUES ($1, $2, $3, $4, $5, $6)', [2,correo,contraseña,nombreUsuario,edad,nombre]);
}

module.exports = {
    getUsers,
    registrarUsuario
}