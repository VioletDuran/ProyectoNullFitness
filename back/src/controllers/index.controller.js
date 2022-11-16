const { Pool } = require('pg');
const multer = require('multer');
const { json } = require('express');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'fugox123',
    database: 'web',
    port: '5432'
})


const storage = multer.diskStorage({
    filename: function (res, file, cb) {
      const fileName = file.originalname;
      cb(null, `${fileName}`);
    },
    destination: function (res, file, cb) {
      cb(null, `./public`);
    },
  });
  
const upload = multer({ storage });

const guardarFoto = async (req, res) => {
  let file = req.file.filename;
  let id = file.split(".");
  file = "http://localhost:3000/" + file;
  await pool.query('UPDATE usuarios SET foto = $1 where idusuario = $2', [file,id[0]]);
  pool.end;
  res.send(true);
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

const obtenerEjerciciosPrivados = async(req,res) =>{
    const id = req.params.id;
    const response = await pool.query('select idejercicios from rutinas_ejercicios where idrutinas = $1',[id]);
    pool.end;
    return res.send(response.rows);
}

const devolverRutinas = async (req, res) =>{
    const id = req.params.id;
    const response = await pool.query('select * from rutinas where idusuario = $1',[id]);
    pool.end;
    let resultado = response.rows;
    return res.json(resultado);
}

const generarEjerciciosBasicos = async(idUsuario) =>{
    idUsuario = idUsuario["idusuario"];
    let rutinas = await pool.query('select idrutinas from rutinas where idusuario = $1',[idUsuario]);
    for(let i = 0; i <= 5; i++){
        await pool.query('INSERT INTO rutinas_ejercicios(idrutinas, idejercicios) VALUES ($1,$2)',[rutinas.rows[i]["idrutinas"],1]);
        await pool.query('INSERT INTO rutinas_ejercicios(idrutinas, idejercicios) VALUES ($1,$2)',[rutinas.rows[i]["idrutinas"],2]);
        await pool.query('INSERT INTO rutinas_ejercicios(idrutinas, idejercicios) VALUES ($1,$2)',[rutinas.rows[i]["idrutinas"],3]);
        await pool.query('INSERT INTO rutinas_ejercicios(idrutinas, idejercicios) VALUES ($1,$2)',[rutinas.rows[i]["idrutinas"],4]);
        await pool.query('INSERT INTO rutinas_ejercicios(idrutinas, idejercicios) VALUES ($1,$2)',[rutinas.rows[i]["idrutinas"],5]);
        await pool.query('INSERT INTO rutinas_ejercicios(idrutinas, idejercicios) VALUES ($1,$2)',[rutinas.rows[i]["idrutinas"],6]);
    }
    pool.end;
    return;
}

const devolverRutinasEspecifica = async (req, res) =>{
    const id = req.params.id;
    const response = await pool.query('select * from rutinas where idrutinas = $1',[id]);
    pool.end;
    let resultado = response.rows;
    return res.json(resultado);
}

const crearRutinas = async (idUsuario) =>{
    for(let i = 1; i <= 6; i++){
        let nombreRutina = "MiRutina " + i;
        let fotoNormal = "../../../assets/img/mirutina1.jpg";
        let descripcion = "Rutina preestablecida"
        await pool.query('INSERT INTO rutinas (titulorutina, foto, descripcion,idusuario) VALUES ($1, $2, $3, $4)',[nombreRutina, fotoNormal, descripcion, idUsuario["idusuario"]]);
        pool.end;
    }
    generarEjerciciosBasicos(idUsuario);
    return;
}


const registrarUsuario = async (req, res) => {
    const { nombre, nombreUsuario, edad, correo, contraseña} = req.body;
    const bcrypt = require('bcrypt');
    const saltRounds = 10;
    let auxContraseña =  bcrypt.hashSync(contraseña, saltRounds, (err, hash) => {
        if (err) throw (err)
        contraseña = hash;
    });
    let fotoOriginal = "../../../assets/img/usuario.png";
    let con = await pool.query('INSERT INTO usuarios (tipousuario, correo, contraseña, nombreusuario, edad, nombre, foto) VALUES ($1, $2, $3, $4, $5, $6, $7)', [2,correo,auxContraseña,nombreUsuario,edad,nombre, fotoOriginal]);
    let obtenerId = await pool.query('select idusuario from usuarios where correo = $1',[correo]);
    crearRutinas(obtenerId.rows[0]);
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
    const response = await pool.query('select idusuario,contraseña,tipousuario from usuarios where correo = $1',[correo]);
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
    pool.end;
    if(response){
        res.status(200).send(true);
    }
}

const devolverDatos =  async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('select idusuario, nombreusuario, nombre, edad, peso, nacionalidad, contextura, objetivo, cantidad_ejercicio, foto from usuarios where idusuario = $1',[id]);
    pool.end;
    let resultado = response.rows[0];
    return res.json(resultado);
}

const obtenerEjerciciosTotales = async (req, res) =>{
    let ejercicios = await pool.query('select * from ejercicios');
    for(i = 0; i < ejercicios.rows.length; i++){
        let idMusculos = await pool.query('select idmusculo from ejercicios_musculos where idejercicio = $1',[ejercicios.rows[i]["idejercicio"]]);
        let arregloMusculos = [];
        for(j = 0; j < idMusculos.rows.length; j++){
            let musculo = await pool.query('select musculo from musculos where idmusculo = $1',[idMusculos.rows[j]["idmusculo"]]);
            arregloMusculos.push(musculo.rows[0]["musculo"]);
        }
        ejercicios.rows[i]["musculos"] = arregloMusculos;
    }
    pool.end;
    res.json(ejercicios.rows);
}

const eliminarEjercicioDeRutina = async(req,res) =>{
    const{
        idrutinas,
        idejericio,
    } = req.body;
    const response = await pool.query('delete from rutinas_ejercicios where idejercicios = $1 and idrutinas = $2',[idejericio,idrutinas]);
    pool.end;
    if(response){
        res.status(200).send(true);
    }else{
        res.status(500).send(false)
    }
}

const anadirEjercicio = async(req,res) =>{
    const {idrutinas,idejercicios} = req.body;
    const response1 = await pool.query('select idejercicios from rutinas_ejercicios where idrutinas = $1 and idejercicios = $2',[idrutinas,idejercicios])
    if(response1.rows.length == 1){
        return res.status(200).send(false);
    }
    const response = await pool.query('INSERT INTO rutinas_ejercicios(idrutinas, idejercicios) VALUES ($1,$2)',[idrutinas,idejercicios]);
    if(response){
        return res.status(200).send(true);
    }
}

module.exports = {
    revisarCorreo,
    registrarUsuario,
    loginUsuario,
    modificarDatos,
    devolverDatos,
    guardarFoto,
    upload,
    devolverRutinas,
    obtenerEjerciciosPrivados,
    obtenerEjerciciosTotales,
    devolverRutinasEspecifica,
    eliminarEjercicioDeRutina,
    anadirEjercicio
}