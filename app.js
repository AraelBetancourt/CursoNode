const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multi/multiplicar');
var colors = require('colors');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(data => console.log(data.green))
            .catch(err => console.log(err))
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archibvo creado: ` + colors.yellow(`${archivo}`)))
            .catch(err => console.log(err))
        break;
    default:
        console.log('Comando no reconocido');
        break;
}