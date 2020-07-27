const Reserva = require('../models/reserva'); 

const ReservaCtrl={};

ReservaCtrl.getReserva = async(req,res)=>{
    reserv = await Reserva.find().populate("promocion").populate("usuario").populate("paquete");
    res.json(reserv);
}

ReservaCtrl.crearReserva =async(req,res)=>{
    const reserv = new Reserva (req.body);
    await reserv.save();
    res.json({
        'status':'Reserva Agregado'
    })
}
ReservaCtrl.deleteReserva = async (req, res)=>{
    await Reserva.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Reserva Eliminado'
    })
}

ReservaCtrl.editReserva = async (req, res) => {
    const reserv =  new Reserva (req.body);

    await Reserva.findByIdAndUpdate(req.params.id, {$set: reserv}, {new: true});
    res.json({
        'status': 'Reserva Modificado'
    })
}
module.exports=ReservaCtrl;