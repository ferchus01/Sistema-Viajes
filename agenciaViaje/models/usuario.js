const mongoose = require('mongoose');
const tipousuario = require('./tipoUsuario');
const {Schema} = mongoose;

const UsuarioSchema = new Schema({
    nombre: {type:String, required:true},
    apellido: {type:String, required:true},
    nombreusuario: {type:String, required:true},
    password: {type:String, required:true},
    email: {type:String, required:true},
    telefono: {type:String, required:true},
    img: {type:String, required:false},
    tipousuario: {type: Schema.Types.ObjectId, ref:tipousuario, required:false}
})
module.exports = mongoose.model('Usuario', UsuarioSchema);