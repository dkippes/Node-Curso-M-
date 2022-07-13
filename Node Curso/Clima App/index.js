const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");
require('dotenv').config();

const main = async() => {
    const busquedas = new Busquedas();
    let opt;

    do {
        opt = await inquirerMenu();
        switch(opt) {
            case 1:
                const termino = await leerInput('Ciudad: ');
                const lugares = await busquedas.ciudad(termino);
                console.log(lugares);

                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad: ');
                console.log('Lat: ');
                console.log('Lng: ');
                console.log('Temperatura: ');
                console.log('Minima: ');
                console.log('Maxima: ');
                break;
            case 2:
                break;
        }

        if(opt !== 0) await pausa();
    } while(opt !== 0);
}

main();