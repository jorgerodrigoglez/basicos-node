const fs = require('fs');
// npm i colors
const colors = require('colors');

// SOLUCION 1
//const crearArchivo = ( tabla = 3 ) => {
// SOLUCION 2
const crearArchivo = async( tabla = 3, listar = false, hasta = 10) => {
  
    /*console.log( '===============' );
    console.log( 'TABLA DEL', tabla );
    console.log( '===============' );*/
    
    //SOLUCION 1
    /*return new Promise((resolve, reject) => {
        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${tabla} X ${i} = ${tabla*i}\n`
        }
        
        console.log(salida)
   
        fs.writeFileSync(`tabla-${tabla}.txt`, salida)
        resolve(`tabla-${tabla}`)
    })*/

    //SOLUCION 2
    try {
        let salida = '', 
            consola = '';
       
        for (let i = 1; i <= hasta ; i++) {
            salida += `${tabla} X ${i} = ${tabla*i}\n`
            // elimina de error de sobrescribir el archivo 
            // colora los datos de la consola
            consola += `${tabla} ${'X'.green} ${i} ${'='.green} ${tabla*i}\n`
        }
        
        // de argv.listar - si es true se imprime con bandera -l
        if(listar){
            console.log( '==============='.green );
            console.log( 'TABLA DEL', colors.blue(tabla)  );
            console.log( '==============='.green );
            //console.log(salida)
            console.log(consola)
        }

        fs.writeFileSync(`./salida/tabla-${tabla} creado`, salida)
        return(`tabla-${tabla}`)

    } catch (err) {
        throw err
    }
}

module.exports = {
    //crearArchivo: crearArchivo
    crearArchivo
}