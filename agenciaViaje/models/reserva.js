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
    nomcliente: {type:String, required:true},
    apecliente: {type:String, required:true},
    telcliente: {type:Number, required:true},
    dnicliente: {type:Number, required:true},
    codArea: {type:Number, required:true},
    estado: {type:Boolean, required:true},domicilio : {type : String , required : true},
    email: {type:String, required:true},
    nomvoucher: {type:String, required:false},
    telvoucher: {type:Number, required:false},
    promocion: {type: Schema.Types.ObjectId, ref:promocion, required:false},
    pago: {type: pago.schema, required:false},
    usuario: {type:Schema.Types.ObjectId, ref:usuario, required:false},
    paquete: {type:Schema.Types.ObjectId, ref:paquete, required:false},
    formapago: {type:formapago.schema, required:false},
    tarjeta: {type:tarjeta.schema, required:false} 
})

module.exports = mongoose.model('Reserva', ReservaSchema);