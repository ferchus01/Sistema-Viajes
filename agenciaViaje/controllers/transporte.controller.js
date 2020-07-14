const Transporte = require('../models/transporte'); 

const TransporteCtrl={};

TransporteCtrl.getTransporte = async(req,res)=>{
    trans = await Transporte.find();
    res.json(trans);
}

TransporteCtrl.crearTransporte =async(req,res)=>{
    const trans = new Transporte (req.body);
    await trans.save();
    res.json({
        'status':'Transporte Agregado'
    })
}
TransporteCtrl.deleteTransporte = async (req, res)=>{
    await Transporte.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Transporte Eliminado'
    })
}

TransporteCtrl.editTransporte = async (req, res) => {
    const trans =  new Transporte (req.body);

    await Transporte.findByIdAndUpdate(req.params.id, {$set: trans}, {new: true});
    res.json({
        'status': 'Transporte Modificado'
    })
}
module.exports=TransporteCtrl;