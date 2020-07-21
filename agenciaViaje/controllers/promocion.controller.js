const Promocion = require('../models/promocion'); 

const PromocionCtrl={};

PromocionCtrl.getPromocion = async(req,res)=>{
    promo = await Promocion.find().populate("paqueteTuristico");
    res.json(promo);
}

PromocionCtrl.crearPromocion =async(req,res)=>{
    const promo = new Promocion (req.body);
    await promo.save();
    res.json({
        'status':'Promocion Agregado'
    })
}
PromocionCtrl.deletePromocion = async (req, res)=>{
    await Promocion.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Promocion Eliminado'
    })
}

PromocionCtrl.editPromocion = async (req, res) => {
    const promo =  new Promocion (req.body);

    await Promocion.findByIdAndUpdate(req.params.id, {$set: promo}, {new: true});
    res.json({
        'status': 'Promocion Modificado'
    })
}
module.exports=PromocionCtrl;