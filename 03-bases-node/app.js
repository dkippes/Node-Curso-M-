
const {crearArchivo} = require('./helpers/multiplicar');

console.clear();

const base = 5;

crearArchivo(base)
    .then(archivo => console.log(archivo, 'creado'))
    .catch(e => console.log(e));
