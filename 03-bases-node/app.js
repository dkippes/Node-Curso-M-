const argv = require('./config/yargs');
const {crearArchivo} = require('./multiplicar/multiplicar')
require('colors/safe');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
.catch(err => console.log(err))