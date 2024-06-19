const perro = {
  raza: "salchica",
  nombre: "pancho",
  edad: 3,
  color: "marrón",
};

// const perro2 = perro;

// perro.collar = true;

//
// console.log(perro2);

const perro2 = { ...perro, nombre: "Fido" };

perro.collar = true;
console.log(perro2);
console.log(perro);

//////////////////////////////////////////////////////////////////////////////

// const miArreglo = [true, "palabra", { a: 5 }];

// miArreglo.push("Nuevo elemento");

// console.log(miArreglo);

//////////////////////////////////////////////////////////////////////////////

// const miArreglo = [true, "palabra", { a: 5 }];

// const miNuevoArreglo = [...miArreglo, "Nuevo elemento"];

// console.log(miNuevoArreglo);

//////////////////////////////////////////////////////////////////////////////

// const miArreglo1 = [1, 6, 54, 2];
// const miArreglo2 = [8, 54, 235, 88];

// const miArreglo3 = [...miArreglo1, ...miArreglo2];

// console.log(miArreglo3);
