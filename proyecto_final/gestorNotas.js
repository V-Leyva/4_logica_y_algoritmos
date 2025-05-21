/* 
-> Objetivo
El objetivo es construir un programa en Node.js que administre notas personales utilizando el módulo `fs`. Los estudiantes practicarán leer, escribir, verificar y eliminar archivos, consolidando los conceptos aprendidos.
 */

/* 
-> Problema: Gestor de Notas Personales
Hoy en día, muchas personas necesitan guardar notas rápidas o recordatorios. Crear una aplicación para gestionar estas notas en archivos puede ser una solución útil para practicar manejo de archivos y entender cómo interactuar con el sistema de archivos en Node.js. La aplicación debe permitir al usuario:

- Crear una nueva nota y guardarla en un archivo.
- Leer todas las notas existentes.
- Eliminar una nota específica según su título.
 */


/* 
-> Instrucciones para resolver el problema:
- Crea un archivo `gestorNotas.js`.
- Usa el módulo `fs` para realizar las operaciones de manejo de archivos.
- Las notas deben almacenarse en un archivo JSON llamado `notas.json`. Usa el formato JSON para guardar la información en el archivo.
- Implementa la Funcionalidad del Programa descrita anteriormente:
- Crear una nota: Agrega una nueva nota con un título y contenido.
- Listar notas: Lee el archivo `notas.json` y muestra todas las notas en la consola.
- Eliminar una nota: Borra una nota específica según su título.
 */


const FS = require('fs');
const PATH = './notas';
const ARCHIVO = `/notas.json`;
const PATH_ARCHIVO = PATH + ARCHIVO;

// Crear una nota: Agrega una nueva nota con un título y contenido.
function push_Nota(titulo_s, contenido_s){
    if(!FS.existsSync(PATH)) FS.mkdirSync(PATH);
    if(!FS.existsSync(PATH_ARCHIVO)) FS.writeFileSync(PATH_ARCHIVO, '[]', 'utf-8');

    let obj_notas = JSON.parse(FS.readFileSync(PATH_ARCHIVO));

    // Nuevo objeto
    const nueva_nota = {
    titulo: titulo_s,
    contenido: contenido_s
    };

    // Agregar el objeto
    obj_notas.push(nueva_nota);

    // Guardar en el archivo
    FS.writeFileSync(PATH_ARCHIVO, JSON.stringify(obj_notas), 'utf-8');
}

// Listar notas: Lee el archivo `notas.json` y muestra todas las notas en la consola.
function get_Notas(){
    if (FS.existsSync(PATH_ARCHIVO)) {
        const NOTAS = FS.readFileSync(PATH_ARCHIVO, 'utf-8');
        console.log(JSON.parse(NOTAS));
    } else {
        console.log('No hay notas guardadas.');
    }
}

// Eliminar una nota: Borra una nota específica según su título.
function delete_Nota(titulo_s){
    if (FS.existsSync(PATH_ARCHIVO)) {
        // PISTA: Primero lee todas las notas.
        // COMPLETAR: Usa fs.readFileSync para leer el archivo.

        let obj_notas = JSON.parse(FS.readFileSync(PATH_ARCHIVO)); 
        // PISTA: Filtra las notas y elimina la que coincida con el título.
        // COMPLETAR: Usa Array.filter para obtener las notas restantes.
        obj_notas = obj_notas.filter(nota => nota.titulo !== titulo_s);
        const existe = obj_notas.some(nota => nota.titulo === titulo_s);

        if (obj_notas.some(nota => nota.titulo === titulo_s)) {
            obj_notas = obj_notas.filter(nota => nota.titulo !== titulo_s);
            FS.writeFileSync(PATH_ARCHIVO, JSON.stringify(obj_notas), 'utf-8');
            console.log(`Nota con título "${titulo_s}" eliminada.`);
            console.log(`Nota con título "${titulo_s}" eliminada.`);
        } else {
            console.log(`No se encontró ninguna nota con el título "${titulo_s}".`);
        }
    } else {
        console.log('No hay notas guardadas.');
    }
}

push_Nota('prueba 3', 'comentario de prueba 3');

get_Notas();
delete_Nota('prueba 1');
get_Notas();
