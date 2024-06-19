// function sumar(a, b, c) {
//   const suma = a + b + c;

//   return suma;
// }

// function sumar(...numeros) {
//   console.log(numeros);

//   let suma = 0;
//   for (let i = 0; i < numeros.length; i++) {
//     suma += numeros[i];
//   }
//   return suma;
// }

// console.log(sumar(5, 9, 3));

// console.log(sumar(5, 9));

// console.log(sumar(5, 9, 3, 8, 4, 6));

let a = null;
let b = "Texto1";
let c = "Texto2";
let d = undefined;

let resultado = a ?? b ?? c ?? d;
console.log(resultado);
