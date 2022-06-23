const argv = require('yargs')
    .options('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .options('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: 10,
        describe: 'Este es el numero hasta donde quieres la tabla'
    })
    .options('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        describe: 'Muestra la tabla en consola'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero'
        }
        return true;
    })
    .argv;

module.exports = argv;