const fs = require('fs');

let listarTabla = (base, limite) => {
    return new Promise((result, reject) => {
        if (!Number(base)) {
            reject('la base no es un numero')
            return
        }
        if (!Number(limite)) {
            reject('el limite no es el indicado')
            return
        }
        let data = "";
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }
        result(data)
    })

}

let crearArchivo = (base, limite) => {
        return new Promise((result, reject) => {
            if (!Number(base)) {
                reject('No es un numero')
                return
            }
            let data = "";
            for (let i = 1; i <= limite; i++) {
                data += `${base} * ${i} = ${base*i} \n`;
            }

            fs.writeFile(`Tablas/Tabla-${base}-al-${limite}.txt`, data, (err) => {
                if (err) reject(err);
                else
                    result(`Tabla-${base}-al-${limite}.txt`)
            });
        })
    }
    //Se puede mandar a llamar un modulo de la siguiente manera o puedes colocar al principio 
    //module.exports.'Nombre de tu metodo'
module.exports = {
    crearArchivo,
    listarTabla
}