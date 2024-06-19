// const miObjeto = new Object();

// miObjeto.nombre = "Ezequiel";
// miObjeto.apellido = "Bonilla";
// console.log(miObjeto);

// const miObjeto = {
//     nombre:"Ezequiel",
//     apellido:"Bonilla",
//     edad:"32",
// };console.log(miObjeto);

// const nombre = "Ezequiel";
// const apellido = "Bonilla";

// const persona = {
//     // nombre: nombre, si la propiedad es igual a la variable, puede simplificarse
//     // apellido: apellido,
//     nombre,
//     apellido,
// };
// console.log(persona)

////////////////////////////////////////////////////////

function unaCualquiera(nombre, apellido, edad) {
    const persona = {
        nombre,
        apellido,
        edad,
    };
return persona
};
console.log(unaCualquiera("ezequiel", "bonilla", "32"));