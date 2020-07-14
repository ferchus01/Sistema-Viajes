const mongoose = require('mongoose');
const paquete = require('./paquete');
const {Schema} = mongoose;

const PromocionSchema = new Schema({
    descuento: {type:Number, required:true},
    puntosregalados: {type:Number, required:true},
    diasregalados: {type:Number, required:true},
    paquete: {type:Schema.Types.ObjectId, ref:paquete, required:true}
})

module.exports = mongoose.model('Promocion', PromocionSchema);