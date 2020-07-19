const TipoUsuario = require('../models/tipoUsuario'); 

const TipoUsuarioCtrl={};

TipoUsuarioCtrl.getTipoUsuario = async(req,res)=>{
    tipe = await TipoUsuario.find();
    res.json(tipe);
}

TipoUsuarioCtrl.crearTipoUsuario =async(req,res)=>{
    const tipe = new TipoUsuario (req.body);
    await tipe.save();
    res.json({
        'status':'Tipo de Usuario Agregado'
    })
}
TipoUsuarioCtrl.deleteTipoUsuario = async (req, res)=>{
    await TipoUsuario.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Tipo de Usuario Eliminado'
    })
}

TipoUsuarioCtrl.editTipoUsuario = async (req, res) => {
    const tipe =  new TipoUsuario (req.body);
    await TipoUsuario.findByIdAndUpdate(req.params.id, {$set: tipe}, {new: true});
    res.json({
        'status': 'Tipo de Usuario Modificado'
    })
}
module.exports=TipoUsuarioCtrl;