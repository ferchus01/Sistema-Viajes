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
UsuarioCtrl.loginUsuario = async (req, res)=>{
    //en req.body se espera que vengan las credenciales de login
    //defino los criterios de busqueda en base al username y password recibidos
    const criteria = {
        nombreusuario: req.body.nombreusuario,
        password: req.body.password,
    } 
    //el método findOne retorna un objeto que cumpla con los criterios de busqueda
    Usuario.findOne(criteria, function(err, user) {

       //el método findOne retorna un objeto que cumpla con los criterios de busqueda
        if (err) {
            res.json({
                status: 0,
                message: 'error'})
        };
        if (!user) {
            res.json({
                status: 0,
                message: "not found" })
        } else {
            res.json({
                status: 1,
                message: "success",
                nombreusuario: user.nombreusuario,
                tipousuario:{
                descripcion: user.tipousuario.descripcion
                },
                _id: user._id
                    });
            }
    }).populate('tipousuario');
}
module.exports=UsuarioCtrl;