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
        pool.end;
        return res.status(200).send(true);
    }else{
        pool.end;
        return res.status(404).send(false);
    }
}

const registrarUsuario = async (req, res) => {
    const { nombre, nombreUsuario, edad, correo, contraseña} = req.body;
    let con = await pool.query('INSERT INTO usuarios (tipousuario, correo, contraseña, nombreusuario, edad, nombre) VALUES ($1, $2, $3, $4, $5, $6)', [2,correo,contraseña,nombreUsuario,edad,nombre]);
    if(!con){
        pool.end;
        return res.status(404).send(false);
    }else{
        pool.end;
        return res.status(200).send(true);
    }
}

const loginUsuario = async (req,res) => {
    const {correo,contraseña} = req.body;
    const response = await pool.query('select correo,contraseña from usuarios where correo = $1',[correo]);
    if(response.rows[0].contraseña == contraseña){
        pool.end;
        return res.send(true);
    }else{
        pool.end;
        return res.send(false);
    }
}

module.exports = {
    revisarCorreo,
    registrarUsuario,
    loginUsuario
}