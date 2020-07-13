const mongoose = require('mongoose');
const {Schema} = mongoose;

const PaqueteSchema = new Schema({
    destino:{type:String,required:true},
    imagen:{type:String,required:true},
    descripcion:{type:String,required:true},
    precio:{type:Number,required:true},
    fechaS:{type:String,required:true},
    fechaV:{type:String,required:true},
    alojamiento:{type:String,required:true},
    transporte:{type:String,required:true},
    estadia:{type:Number,required:true},
    cantPersonas:{type:Number,required:true}
})

module.exports= mongoose.model('Paquete',PaqueteSchema);