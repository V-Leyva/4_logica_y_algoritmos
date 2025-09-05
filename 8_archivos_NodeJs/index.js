// fs -> File system
const FS = require('fs');

// Leer archivos
// const MASCOTA = FS.readFileSync('./docs/mascota.json', 'utf-8');
// console.log(MASCOTA);

// Convertir el string a objeto
// console.log(JSON.parse(MASCOTA));

// Escribir archivos
// const TEXTO = 'Este texto se ecribe desde js 3';
// if(!FS.existsSync('./docs/new_document.txt')){
//     FS.writeFileSync('./docs/new_document.txt', TEXTO);
// }else{
//     console.log('El archivo ya existe');
// }

// const JSON_RECETA = {
//     nombre : "Quesadilla",
//     ingredientes : ["queso", "tortilla", "salsa"]
// };

// if(FS.existsSync('./docs/json')){
//     if(!FS.existsSync('./docs/new_document.json')){
//         FS.writeFileSync('./docs/new_document.json', JSON.stringify(JSON_RECETA));
//     }else{
//         console.log('El archivo ya existe');
//     }
// }else{
//     FS.mkdirSync('./docs/json');
//     if(!FS.existsSync('./docs/json/new_document.json')){
//         FS.writeFileSync('./docs/json/new_document.json', JSON.stringify(JSON_RECETA));
//     }else{
//         console.log('El archivo ya existe');
//     }
// }

// logs -> Registro de eventos

const PATH_LOGS = './logs'

function logError(hora, error, ubicacion){
    if(!FS.existsSync(PATH_LOGS)) FS.mkdirSync(PATH_LOGS);
    if(!FS.existsSync(`${PATH_LOGS}/logs.log`)) FS.writeFileSync(`${PATH_LOGS}/logs.log`, 'Registro de errores\n', 'utf-8');
    FS.appendFileSync(`${PATH_LOGS}/logs.log`, `${hora} - ${error} - ${ubicacion}\n`, 'utf-8');
}

logError(`[${new Date().toISOString()}]`, 'Error de prueba', 'index.js');