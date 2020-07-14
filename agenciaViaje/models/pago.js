const mongoose = require('mongoose');
const {Schema} = mongoose;

const PagoSchema = new Schema({
    fecha: {type:Date, required:true},
    total: {type:Number, required:true},
    cuotas: {type:Number, required:false},
    interes: {type:Number, required:true},
    estado: {type:Boolean, required:true}
})
module.exports = mongoose.model('Pago', PagoSchema);  