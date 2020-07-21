import { TipoUsuario } from './tipo-usuario';

export class Usuario {
    _id: string;
    nombre:string;
    apellido: string;
    dni: number;
    email: string;
    numTelefono: number;
    nombreusuario: string;
    password: string;
    tipoUsuario: TipoUsuario;

    constructor()
    {
        this.tipoUsuario = new TipoUsuario();
    }
}
