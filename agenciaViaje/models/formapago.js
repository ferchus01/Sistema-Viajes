const mongoose = require('mongoose');
const {Schema} = mongoose;

const FormaPagoSchema = new Schema({
    descripcion: {type:String, required:true}
})

module.exports = mongoose.model('formaPago', FormaPagoSchema);