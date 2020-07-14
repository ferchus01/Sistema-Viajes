const mongoose = require('mongoose');
const {Schema} = mongoose;

const TarjetaSchema = new Schema({
    titulartarjeta: {type: String, required:true},
    dnititular: {type:Number, required:true},
    vencimiento: {type:Date, required:true}
})

module.exports = mongoose.model('Tarjeta', TarjetaSchema);