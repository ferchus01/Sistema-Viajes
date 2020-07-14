const Tarjeta = require('../models/paquete'); 

const TarjetaCtrl={};

TarjetaCtrl.getTarjeta = async(req,res)=>{
    tarjet = await Tarjeta.find();
    res.json(tarjet);
}

TarjetaCtrl.crearTarjeta =async(req,res)=>{
    const tarjet = new Tarjeta (req.body);
    await tarjet.save();
    res.json({
        'status':'Tarjeta Agregado'
    })
}
TarjetaCtrl.deleteTarjeta = async (req, res)=>{
    await Tarjeta.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Tarjeta Eliminado'
    })
}

TarjetaCtrl.editTarjeta = async (req, res) => {
    const tarjet =  new Tarjeta (req.body);
    await Tarjeta.findByIdAndUpdate(req.params.id, {$set: tarjet}, {new: true});
    res.json({
        'status': 'Tarjeta Modificado'
    })
}
module.exports=TarjetaCtrl;