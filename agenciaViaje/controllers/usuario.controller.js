const Usuario = require('../models/usuario'); 

const UsuarioCtrl={};

UsuarioCtrl.getUsuario = async(req,res)=>{
    usu = await Usuario.find().populate("tipousuario");
    res.json(usu);
}

UsuarioCtrl.crearUsuario =async(req,res)=>{
    const usua = new Usuario (req.body);
    await usua.save();
    res.json({
        'status':'Usuario Agregado'
    })
}
UsuarioCtrl.deleteUsuario = async (req, res)=>{
    await Usuario.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Usuario Eliminado'
    })
}

UsuarioCtrl.editUsuario = async (req, res) => {
    const usua =  new Usuario (req.body);

    await Usuario.findByIdAndUpdate(req.params.id, {$set: usua}, {new: true});
    res.json({
        'status': 'Usuario Modificado'
    })
}
module.exports=UsuarioCtrl;