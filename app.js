const fs = require('fs');
const { crearArchivo } = require('./helpers/multiplicar');
// npm i yargs
const argv = require('./config/yargs');
// npm i colors
//const colors = require('colors');
require('colors');

// Parametros de consola con yargs
//const argv = require('yargs').argv;
/*const argv = require('yargs')
    .option('b',{
        alias: 'tabla',
        type: 'number',
        demandOption: true
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        //demandOption: true,
        default: false
    })
    .check((argv,options) => {
        //console.log('yargs', argv)
        if( isNaN(argv.b)){
            throw 'La tabla tiene que ser un número'
        }
        return true;
    })
    .argv;*/

console.clear();

// Parametros de consola manual
//console.log(process.argv);
/*const[ , ,arg3 = 'tabla=5'] = process.argv;*/
//console.log(arg3);
/*const[ , tabla = 5] = arg3.split('=')
console.log(tabla);*/

// Parametros de consola con yargs
//console.log( process.argv );
//console.log( argv );
//console.log('tabla:yargs', argv.tabla)

//const tabla = 3;

crearArchivo( argv.b, argv.l, argv.h)
    .then( crearArchivo => console.log(crearArchivo.rainbow, 'creado') )
    .catch( err => console.log(err) )


// pasamos el código a la funcion de helpers/multiplicar
//console.log( '===============' );
//console.log( ' TABLA DEL 5' );
//console.log( '===============' );


/*let salida ='';
for (let i = 1; i <= 10; i++) {
    //console.log(`${tabla} X ${i} = ${tabla*i}`) 
    salida += `${tabla} X ${i} = ${tabla*i}\n`
}

console.log(salida)

//fs.writeFile(`tabla ${tabla}.txt`, salida, (err) => {
//   if(err) throw err
//   console.log(`tabla ${tabla} Creada`)
//})

fs.writeFileSync(`tabla ${tabla}.txt`, salida)
console.log(`tabla ${tabla} Creada`)*/
