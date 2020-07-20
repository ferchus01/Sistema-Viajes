import { TipoUsuario } from './tipo-usuario';

export class Usuario {
    _id: string;
    dni: number;
    apellido: string;
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
