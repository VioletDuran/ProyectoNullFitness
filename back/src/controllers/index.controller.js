const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'fugox123',
    database: 'web',
    port: '5432'
})

const guardarFoto = (req, res) => {
//let EDFile = req.files.file
//EDFile.mv(`./files/${EDFile.name}`,err => {
//    if(err) return res.status(500).send({ message : err })
//
//        return res.status(200).send(true);
//    })
    console.log(req);
}

const revisarCorreo =  async (req, res) => {
    const correo = req.params.correo;
    const response = await pool.query('select correo from usuarios where correo = $1',[correo]);
    if(response.rows.length == 1){
        pool.end;
        res.send(true);
    }else{
        pool.end;
        res.status(200).send(false);
    }
}



const registrarUsuario = async (req, res) => {
    const { nombre, nombreUsuario, edad, correo, contraseña} = req.body;

    const bcrypt = require('bcrypt');
    const saltRounds = 10;
    let auxContraseña =  bcrypt.hashSync(contraseña, saltRounds, (err, hash) => {
        if (err) throw (err)
        contraseña = hash;
    });

    let con = await pool.query('INSERT INTO usuarios (tipousuario, correo, contraseña, nombreusuario, edad, nombre) VALUES ($1, $2, $3, $4, $5, $6)', [2,correo,auxContraseña,nombreUsuario,edad,nombre]);
    if(!con){
        pool.end;
        res.status(200).send(false);
    }else{
        pool.end;
        res.status(200).send(true);
    }
}

const loginUsuario = async (req,res) => {
    const {correo,contraseña} = req.body;
    const response = await pool.query('select idusuario,contraseña from usuarios where correo = $1',[correo]);
    const bcrypt = require('bcrypt');
    const jwt = require('jsonwebtoken');
    if(response.rows.length != 0 && bcrypt.compareSync(contraseña, response.rows[0].contraseña)){
            let resultado = response.rows[0];
            delete resultado.password;
            let token = jwt.sign({
                data: resultado
            }, 'secret', { expiresIn: 60 * 60 * 24}) // Expira en 1 día
            pool.end;
            return res.json({
                token,
                valor: true
            })
    }else{
        pool.end;
        res.status(400).send(false);
    }
}

const modificarDatos =  async (req, res) => {
    const {idusuario, edad, peso, nacionalidad, contextura, objetivo, cantidad_ejercicio} = req.body;
    const response = await pool.query('UPDATE usuarios SET edad = $2,peso = $3, nacionalidad = $4, contextura = $5, objetivo = $6, cantidad_ejercicio = $7 WHERE idusuario = $1',[idusuario, edad, peso, nacionalidad, contextura, objetivo, cantidad_ejercicio])
    if(response){
        res.status(200).send(true);
    }
}

const devolverDatos =  async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('select idusuario, nombreusuario, nombre, edad, peso, nacionalidad, contextura, objetivo, cantidad_ejercicio from usuarios where idusuario = $1',[id]);
    let resultado = response.rows[0];
    return res.json(resultado);
}   

module.exports = {
    revisarCorreo,
    registrarUsuario,
    loginUsuario,
    modificarDatos,
    devolverDatos,
    guardarFoto
}