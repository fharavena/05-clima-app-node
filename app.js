const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${coors.direccion} es de ${ temp} ºC`;

    } catch (e) {
        return `El clima no se pudo determinar en ${ direccion }`;
    }


}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => console.log(e));

// clima.getClima(-3.7037902, 40.4167754, )
//     .then(temp => console.log(temp))
//     .catch(e => console.log(e));

//ejecuciones
// PS E:\node\05-clima-mundo> node app -d "dasdasad"
// PS E:\node\05-clima-mundo> node app -d "Santiago Chile"