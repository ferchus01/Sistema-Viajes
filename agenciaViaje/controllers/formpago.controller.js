const FormaPago = require('../models/formapago'); 

const FormaPagoCtrl={};

FormaPagoCtrl.getFormaPago = async(req,res)=>{
    form = await FormaPago.find();
    res.json(form);
}

FormaPagoCtrl.crearFormaPago =async(req,res)=>{
    const form = new FormaPago (req.body);
    await form.save();
    res.json({
        'status':'Forma de Pago Agregado'
    })
}
FormaPagoCtrl.deleteFormaPago = async (req, res)=>{
    await FormaPago.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Forma de Pago Eliminado'
    })
}

FormaPagoCtrl.editFormaPago = async (req, res) => {
    const form =  new FormaPago (req.body);

    await FormaPago.findByIdAndUpdate(req.params.id, {$set: form}, {new: true});
    res.json({
        'status': 'Forma de Pago Modificado'
    })
}
module.exports=FormaPagoCtrl;