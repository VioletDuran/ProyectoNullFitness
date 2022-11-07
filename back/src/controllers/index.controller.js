const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'fugox123',
    database: 'web',
    port: '5432'
})

const revisarCorreo =  async (req, res) => {
    const {correo} = req.body;
    const response = await pool.query('select correo from usuarios where correo = $1',[correo]);  
    if(response.rows.length == 1){
        return res.send(true);
    }else{
        return res.send(false);
    }
}

const registrarUsuario = async (req, res) => {
    const { nombre, nombreUsuario, edad, correo, contraseña} = req.body;
    await pool.query('INSERT INTO usuarios (tipousuario, correo, contraseña, nombreusuario, edad, nombre) VALUES ($1, $2, $3, $4, $5, $6)', [2,correo,contraseña,nombreUsuario,edad,nombre]);
    return res.response;
}

module.exports = {
    revisarCorreo,
    registrarUsuario
}