const mongoose = require('mongoose');
const paquete = require('./paquete');
const {Schema} = mongoose;

const PromocionSchema = new Schema({
    descuento: {type:Number, required:true},
    diasDeRegalo: {type:Number, required:false},
    puntosDeRegalo: {type:Number, required:false},
    paqueteTuristico: {type:Schema.Types.ObjectId, ref:paquete, required:true}
})

module.exports = mongoose.model('Promocion', PromocionSchema);