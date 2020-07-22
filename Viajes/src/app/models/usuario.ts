import { TipoUsuario } from './tipo-usuario';

export class Usuario {

    // tslint:disable-next-line: variable-name
    _id: string;
    nombre: string;
    apellido: string;
    dni: number;
    email: string;
    telefono: number;
    nombreusuario: string;
    password: string;
    tipousuario: TipoUsuario;

    constructor()
    {
        this.tipousuario = new TipoUsuario();
    }
}
