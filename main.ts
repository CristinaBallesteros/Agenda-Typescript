import { Persona } from "./persona";
import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Telefono } from "./telefono";

let agenda : Persona[]=[]

// Creamos los registros de personas
const direccion1 = new Direccion("Calle Mayor", 1, 4, "A", 28001, "Madrid", "Madrid");
const mail1 = new Mail ("Personal","juan.perez@gmail.com")
const telefono1 =new Telefono ("Móvil",666777888)
const persona1 = new Persona("Juan", "Pérez", 30, "12345678A", "1991-04-08", "Azul", "Hombre", [direccion1], 
[mail1], [telefono1], "Notas de Juan");

agenda.push(persona1);

const direccion2 = new Direccion("Calle Gran Vía",50,4,"B",28013,"Madrid", "Madrid");
const mail2 = new Mail ("Trabajo","maria.garcia@empresa.com")
const telefono2fijo =new Telefono ("Fijo",912345678)
const telefono2movil =new Telefono ("Móvil",677888999)
const persona2 = new Persona("María", "García", 25, "87654321B", "1996-08-15", "Rojo", "Mujer", 
[direccion2], [mail2],[telefono2fijo,telefono2movil], "Notas de María");

agenda.push(persona2);

const direccion3 = new Direccion("Calle Alcalá",100,1,"C", 28009,"Madrid","Madrid");
const mail3 = new Mail ("Personal", "pedro.gonzalez@hotmail.com") 
const telefono3 =new Telefono ("Móvil",666111228)
const persona3 = new Persona("Pedro", "González", 40, "45678901C", "1983-12-20", "Verde", "Hombre", 
[direccion3], [mail3],[telefono3], "Notas de Pedro");

agenda.push(persona3);

// Mostramos los registros de personas creados
console.log("Registros de personas creados:");
console.log(persona1.obtenerDatos());
console.log(persona2.obtenerDatos());
console.log(persona3.obtenerDatos());

// Añadimos una nueva dirección, un nuevo telefóno y un nuevo mail a la persona 1 buscandola a partir de su DNI
const dniABuscar = "12345678A";

// Buscamos la persona por su DNI
const personaEncontrada = agenda.find(persona => persona.getDni() === dniABuscar);

if (personaEncontrada) {
  // Creamos una nueva dirección
  const nuevaDireccion = new Direccion("Calle Nueva", 2, 3, "B", 28002, "Madrid", "Madrid");

  // Agregamos la nueva dirección a la persona encontrada
  personaEncontrada.agregarDireccion(nuevaDireccion);

  // Creamos un nuevo correo electrónico
  const nuevoCorreo = new Mail("Trabajo", "juan.perez@empresa.com");

  // Agregamos el nuevo correo electrónico a la persona encontrada
  personaEncontrada.agregarMail(nuevoCorreo);

  // Creamos un nuevo teléfono
  const nuevoTelefono = new Telefono("Trabajo", 912345678);

  // Agregamos el nuevo teléfono a la persona encontrada
  personaEncontrada.agregarTelefono(nuevoTelefono);

// Mostramos los registros de personas modificados
console.log("Registros de personas modificados:");
console.log(persona1.obtenerDatos());
console.log(persona2.obtenerDatos());
console.log(persona3.obtenerDatos());
} 