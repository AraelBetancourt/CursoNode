const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en cosola la tabla de multuplicar', opt)
    .command('crear', 'Genera archivo de la tabla de multuplicar', opt)
    .help()
    .argv;

module.exports = {
    argv
}