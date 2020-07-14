var express = require('express');
var app = express();

const {mongoose} = require('./database')
const cors = require('cors');

//middlewares
app.use(express.json({limit : '50mb'}));
app.use(cors({origin: 'http://localhost:4200'}));

//Cargamos el modulo de direccionamiento de rutas para puntos
app.use('/api/gestionarPaquetes', require('./routes/paquete.route'));
app.use('/api/usuario', require('./routes/usuario.route'));
app.use('/api/reserva', require('./routes/reserva.route'));
app.use('/api/tipousuario', require('./routes/tipousuario.route'));
app.use('/api/transporte', require('./routes/transporte.route'));
app.use('/api/tarjeta', require('./routes/tarjeta.route'));
app.use('/api/promocion', require('./routes/promocion.route'));
app.use('/api/alojamiento', require('./routes/alojamiento.route'));
app.use('/api/formapago', require('./routes/formapago.route'));
app.use('/api/pago', require('./routes/pago.route'));

//setting
app.set('port', process.env.PORT || 3000);

//starting the server
app.listen(app.get('port'),()=>{
    console.log(`Server started on port`, app.get('port'));
})