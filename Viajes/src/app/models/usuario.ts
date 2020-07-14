import { TipoUsuario } from './tipo-usuario';

export class Usuario {
    _id : string;
    dni : number;
    apellido : string;
    email : string;
    numTelefono : number;
    nombreUsuario : string;
    contraseña : string;
    tipoUsuario : TipoUsuario;

    constructor()
    {
        this.tipoUsuario= new TipoUsuario();
    }
}
