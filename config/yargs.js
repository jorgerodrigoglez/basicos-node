const argv = require('yargs')
    .option('b',{
        alias: 'tabla',
        type: 'number',
        demandOption: true,
        describe: 'es la tabla de multiplicar que quieres listar'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'hasta que numero quieres multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        //demandOption: true,
        default: false,
        describe: 'es la opcion para listar la tabla de multiplicar'
    })
    .check((argv,options) => {
        //console.log('yargs', argv)
        if( isNaN(argv.b)){
            throw 'La tabla tiene que ser un número'
        }
        return true;
    })
    .argv;

    module.exports = argv;