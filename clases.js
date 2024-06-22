class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.amigos = [];
    this.sentado = true;
  }

  agregarAmigo(nombreAmigo) {
    this.amigos.push(nombreAmigo);
  }

  pararse() {
    this.sentado = false;
  }

  sentarse() {
    this.sentado = true;
  }
}

// const persona1 = new Persona("Ezequiel", 32);

// console.log(persona1);

// persona1.agregarAmigo("Pedro");
// persona1.agregarAmigo("Juana");

// console.log(persona1);

// persona1.pararse();

// console.log(persona1);

// persona1.sentarse();

// console.log(persona1);

class Doctor extends Persona {
  constructor(nombre, edad, matricula) {
    super(nombre, edad);
    this.matricula;
  }
}

const doctor1 = new Doctor("Gadorcha", 50, 123456);

console.log(doctor1);

doctor1.agregarAmigo("Socolinsky");

console.log(doctor1);
