const mongoose = require('mongoose');
const promocion = require('./promocion');
const usuario = require('./usuario');
const pago = require('./pago');
const paquete = require('./paquete');
const formapago = require('./formapago');
const tarjeta = require('./tarjeta');
const {Schema} = mongoose;

const ReservaSchema = new Schema ({
    fecha: {type:Date, required:true},
    nomliente: {type:String, required:true},
    apecliente: {type:String, required:true},
    telcliente: {type:Number, required:true},
    dnicliente: {type:Number, required:true},
    estado: {type:Boolean, required:true},
    email: {type:String, required:true},
    nomvoucher: {type:String, required:true},
    telvoucher: {type:Number, required:true},
    promocion: {type: Schema.Types.ObjectId, ref:promocion, required:false},
    pago: {type:Schema.Types.ObjectId, ref:pago, required:false},
    usuario: {type:Schema.Types.ObjectId, ref:usuario, required:false},
    paquete: {type:Schema.Types.ObjectId, ref:paquete, required:false},
    formapago: {type:Schema.Types.ObjectId, ref:formapago, required:false},
    tarjeta: {type:Schema.Types.ObjectId, ref:tarjeta, required:false} 
})

module.exports = mongoose.model('Reserva', ReservaSchema);