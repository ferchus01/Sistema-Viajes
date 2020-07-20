const mongoose = require('mongoose');
const transporte = require('./transporte');
const alojamiento = require('./alojamiento');
const {Schema} = mongoose;

const PaqueteSchema = new Schema({
    destino:{type:String,required:true},
    imagen:{type:String,required:true},
    descripcion:{type:String,required:true},
    precio:{type:Number,required:true},
    fechaS:{type:Date,required:true},
    fechaV:{type:Date,required:true},
    estadia:{type:Number,required:true},
    cantPersonas:{type:Number,required:true},
    transporte: {type: Schema.Types.ObjectId, ref:transporte, required:true},
    alojamiento: {type: Schema.Types.ObjectId, ref:alojamiento, required:true}
})

module.exports= mongoose.model('Paquete',PaqueteSchema);