const Paquete = require('../models/paquete'); 

const PaqueteCtrl={};

PaqueteCtrl.getPaquete = async(req,res)=>{
    paquet = await Paquete.find().populate("transporte").populate("alojamiento");
    res.json(paquet);
}

PaqueteCtrl.crearPaquete =async(req,res)=>{
    const paquet = new Paquete (req.body);
    await paquet.save();
    res.json({
        'status':'Paquete Agregado'
    })
}
PaqueteCtrl.deletePaquete = async (req, res)=>{
    await Paquete.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Paquete Eliminado'
    })
}

PaqueteCtrl.editPaquete = async (req, res) => {
    const paquet =  new Paquete (req.body);

    await Paquete.findByIdAndUpdate(req.params.id, {$set: paquet}, {new: true});
    res.json({
        'status': 'Paquete Modificado'
    })
}
module.exports=PaqueteCtrl;