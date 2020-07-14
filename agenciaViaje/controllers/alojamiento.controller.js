const Alojamiento = require('../models/alojamiento'); 

const AlojamientoCtrl={};

AlojamientoCtrl.getAlojamiento = async(req,res)=>{
    aloja = await Alojamiento.find();
    res.json(aloja);
}

AlojamientoCtrl.crearAlojamiento =async(req,res)=>{
    const aloja = new Alojamiento (req.body);
    await aloja.save();
    res.json({
        'status':'Alojamiento Agregado'
    })
}
AlojamientoCtrl.deleteAlojamiento = async (req, res)=>{
    await Alojamiento.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Alojamiento Eliminado'
    })
}

AlojamientoCtrl.editAlojamiento = async (req, res) => {
    const aloja =  new Alojamiento (req.body);

    await Alojamiento.findByIdAndUpdate(req.params.id, {$set: aloja}, {new: true});
    res.json({
        'status': 'Alojamiento Modificado'
    })
}
module.exports=AlojamientoCtrl;