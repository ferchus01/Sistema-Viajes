const mongoose = require('mongoose');
const {Schema} = mongoose;

const TransporteSchema = new Schema({
    nombre: {type:String, required:true},
    tipo: {type:String, required:true},
    imagen: {type:String, required:false},
    descripcion: {type:String, required:true}
})

module.exports = mongoose.model('Transporte', TransporteSchema);