const myName = 'Felipe';
const myAge = 12;

const sumar = (a: number, b: number) => {
  return a + b;
};
sumar(5, 4);

class Persona {
  constructor(
    private nombre: string,
    private edad: number,
  ) {}

  getSumary() {
    return `Mi nombre es ${this.nombre} y tengo ${this.edad} años`;
  }
}

const felipe = new Persona(myName, myAge);
felipe.getSumary();
