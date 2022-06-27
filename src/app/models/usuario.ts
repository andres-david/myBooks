export class Usuario {

    public id_usuario: number;
    public nombre: string;
    public apellidos: string;
    public correo: string;
    public foto: string;
    public password: string;

    constructor(nombre: string, apellidos: string, correo: string, 
                foto: string, password: string)
    {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.correo = correo;
        this.foto = foto;
        this.password = password;    
    }

}
