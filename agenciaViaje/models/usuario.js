const mongoose = require('mongoose');
const tipousuario = require('./tipoUsuario');
const {Schema} = mongoose;

const UsuarioSchema = new Schema({
    nombre: {type:String, required:false},
    apellido: {type:String, required:true},
    nombreusuario: {type:String, required:true},
    password: {type:String, required:true},
    email: {type:String, required:false},
    telefono: {type:String, required:false},
    img: {type:String, required:false},
    dni: { type : Number, required: true},
    tipousuario: {type: Schema.Types.ObjectId, ref:tipousuario, required:true}
})
module.exports = mongoose.model('Usuario', UsuarioSchema);