const Pago = require('../models/pago'); 

const PagoCtrl={};

PagoCtrl.getPago = async(req,res)=>{
    page = await Pago.find();
    res.json(page);
}

PagoCtrl.crearPago =async(req,res)=>{
    const page = new Pago (req.body);
    await page.save();
    res.json({
        'status':'Pago Agregado'
    })
}
PagoCtrl.deletePago = async (req, res)=>{
    await Pago.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Pago Eliminado'
    })
}

PagoCtrl.editPago = async (req, res) => {
    const page =  new Pago (req.body);
    await Pago.findByIdAndUpdate(req.params.id, {$set: page}, {new: true});
    res.json({
        'status': 'Pago Modificado'
    })
}
module.exports=PagoCtrl;