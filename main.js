"use strict";
exports.__esModule = true;
var persona_1 = require("./persona");
var direccion_1 = require("./direccion");
var mail_1 = require("./mail");
var telefono_1 = require("./telefono");
var agenda = [];
// Creamos los registros de personas
var direccion1 = new direccion_1.Direccion("Calle Mayor", 1, 4, "A", 28001, "Madrid", "Madrid");
var mail1 = new mail_1.Mail("Personal", "juan.perez@gmail.com");
var telefono1 = new telefono_1.Telefono("Móvil", 666777888);
var persona1 = new persona_1.Persona("Juan", "Pérez", 30, "12345678A", "1991-04-08", "Azul", "Hombre", [direccion1], [mail1], [telefono1], "Notas de Juan");
agenda.push(persona1);
var direccion2 = new direccion_1.Direccion("Calle Gran Vía", 50, 4, "B", 28013, "Madrid", "Madrid");
var mail2 = new mail_1.Mail("Trabajo", "maria.garcia@empresa.com");
var telefono2fijo = new telefono_1.Telefono("Fijo", 912345678);
var telefono2movil = new telefono_1.Telefono("Móvil", 677888999);
var persona2 = new persona_1.Persona("María", "García", 25, "87654321B", "1996-08-15", "Rojo", "Mujer", [direccion2], [mail2], [telefono2fijo, telefono2movil], "Notas de María");
agenda.push(persona2);
var direccion3 = new direccion_1.Direccion("Calle Alcalá", 100, 1, "C", 28009, "Madrid", "Madrid");
var mail3 = new mail_1.Mail("Personal", "pedro.gonzalez@hotmail.com");
var telefono3 = new telefono_1.Telefono("Móvil", 666111228);
var persona3 = new persona_1.Persona("Pedro", "González", 40, "45678901C", "1983-12-20", "Verde", "Hombre", [direccion3], [mail3], [telefono3], "Notas de Pedro");
agenda.push(persona3);
// Mostramos los registros de personas creados
console.log("Registros de personas creados:");
console.log(persona1.obtenerDatos());
console.log(persona2.obtenerDatos());
console.log(persona3.obtenerDatos());
// Añadimos una nueva dirección, un nuevo telefóno y un nuevo mail a la persona 1 buscandola a partir de su DNI
var dniABuscar = "12345678A";
// Buscamos la persona por su DNI
var personaEncontrada = agenda.find(function (persona) { return persona.getDni() === dniABuscar; });
if (personaEncontrada) {
    // Creamos una nueva dirección
    var nuevaDireccion = new direccion_1.Direccion("Calle Nueva", 2, 3, "B", 28002, "Madrid", "Madrid");
    // Agregamos la nueva dirección a la persona encontrada
    personaEncontrada.agregarDireccion(nuevaDireccion);
    // Creamos un nuevo correo electrónico
    var nuevoCorreo = new mail_1.Mail("Trabajo", "juan.perez@empresa.com");
    // Agregamos el nuevo correo electrónico a la persona encontrada
    personaEncontrada.agregarMail(nuevoCorreo);
    // Creamos un nuevo teléfono
    var nuevoTelefono = new telefono_1.Telefono("Trabajo", 912345678);
    // Agregamos el nuevo teléfono a la persona encontrada
    personaEncontrada.agregarTelefono(nuevoTelefono);
    // Mostramos los registros de personas modificados
    console.log("Registros de personas modificados:");
    console.log(persona1.obtenerDatos());
    console.log(persona2.obtenerDatos());
    console.log(persona3.obtenerDatos());
}
