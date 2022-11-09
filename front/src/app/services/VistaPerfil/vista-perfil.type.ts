export interface vistaPerfil{
    idRutina:string;
    tituloRutina:string;
    ejercicios:string[];
    foto:string;
}

export interface datosModificables{
    idusuario: string;
    edad: string;
    peso: string;
    nacionalidad: string;
    contextura: string;
    objetivo: string;
    cantidad_ejercicio: string;
}

export interface usuarioFinal{
    idusuario : string, 
    nombreusuario : string,
    nombre: string, 
    edad : string, 
    peso : string, 
    nacionalidad : string, 
    contextura : string, 
    objetivo : string, 
    cantidad_ejercicio : string
}
