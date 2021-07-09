const { describe } = require('yargs');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la Tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        describe: 'Muestra la Tabla en consola',
        default: false
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        describe: 'Cantidad de veces por multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw 'La base debe ser numérica'
        }
        return true;
    })

    .argv;

    module.exports = argv;