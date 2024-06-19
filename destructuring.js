// function mostrarNombre(persona) {
//     // const nombre = persona.nombre;
//     // const apellido = persona.apellido;

//     const {nombre, apellido} = persona;

//     console.log(`El nombre del usuario es ${nombre} y su apellido es ${apellido}`);
// };

// const persona = {
//     nombre: "Carlos",
//     apellido: "Perez",
//     edad: 50,
//     email: "cperez@gmail.com",
//     direccion: "Calle Falsa 123",
//     ciudad: "Posadas",
//     pais: "Argentina",
// };

// mostrarNombre(persona);

///////////////////////////////////////////////////////////////

// const miArray = [1, 2, 3, 4];

// const [num1, num2, num3, num4] = miArray;

// const palabras = ["Hola", "Jorge", "jperez@gmail.com", "Calle falsa 123"];

// const [saludo, nombre, email, direccion] = palabras;

///////////////////////////////////////////////////////////////

function crearPersona({ nombre, apellido, edad }) {
  console.log(nombre, apellido, edad);
}

crearPersona({ nombre: "Lucas", apellido: "Romero", edad: 22 });
