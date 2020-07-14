const mongoose = require('mongoose');
const {Schema} = mongoose;

const TipoUsuarioSchema = new Schema({
    descripcion : {type : String, required: true}
})
module.exports = mongoose.model('TipoUsuario', TipoUsuarioSchema);