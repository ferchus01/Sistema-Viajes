const mongoose = require('mongoose');
const {Schema} = mongoose;

const TransporteSchema = new Schema({
    nombre: {type:String, required:true},
    tipo: {type:String, required:true},
    img: {type:String, required:true},
    descripcion: {type:String, required:true}
})

module.exports = mongoose.model('Transporte', TransporteSchema);