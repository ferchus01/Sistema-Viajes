const mongoose = require('mongoose');
const {Schema} = mongoose;

const AlojamientoSchema = new Schema({
    nombre: {type:String, required:true},
    ubicacion: {type:String, required:true},
    img: {type:String, required:false},
    tipo: {type:String, required:true},
    descripcion: {type:String, required:true},
    cantpersonas: {type:Number, required:true}
})
module.exports = mongoose.model('Alojamiento', AlojamientoSchema);