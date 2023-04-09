"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(a, b, c, d, e, f, g, h, i, j, k) {
        this._nombre = a;
        this._apellidos = b;
        this._edad = c;
        this._DNI = d;
        this._cumpleaños = e;
        this._colorfav = f;
        this._sexo = g;
        this._direcciones = h;
        this._mails = i;
        this._telefonos = j;
        this._notas = k;
    }
    Persona.prototype.getNombre = function () {
        return this._nombre;
    };
    Persona.prototype.setNombre = function (nombre) {
        this._nombre = nombre;
    };
    Persona.prototype.getApellidos = function () {
        return this._apellidos;
    };
    Persona.prototype.setApellidos = function (apellidos) {
        this._apellidos = apellidos;
    };
    Persona.prototype.getEdad = function () {
        return this._edad;
    };
    Persona.prototype.setEdad = function (edad) {
        this._edad = edad;
    };
    Persona.prototype.getDni = function () {
        return this._DNI;
    };
    Persona.prototype.setDni = function (dni) {
        this._DNI = dni;
    };
    Persona.prototype.getCumpleaños = function () {
        return this._cumpleaños;
    };
    Persona.prototype.setCumpleaños = function (cumpleaños) {
        this._cumpleaños = cumpleaños;
    };
    Persona.prototype.getColorFavorito = function () {
        return this._colorfav;
    };
    Persona.prototype.setColorFavorito = function (colorFavorito) {
        this._colorfav = colorFavorito;
    };
    Persona.prototype.getSexo = function () {
        return this._sexo;
    };
    Persona.prototype.setSexo = function (sexo) {
        this._sexo = sexo;
    };
    Persona.prototype.getDirecciones = function () {
        return this._direcciones;
    };
    Persona.prototype.setDirecciones = function (direcciones) {
        this._direcciones = direcciones;
    };
    Persona.prototype.getMails = function () {
        return this._mails;
    };
    Persona.prototype.setMails = function (mails) {
        this._mails = mails;
    };
    Persona.prototype.getTelefonos = function () {
        return this._telefonos;
    };
    Persona.prototype.setTelefonos = function (telefonos) {
        this._telefonos = telefonos;
    };
    Persona.prototype.getNotas = function () {
        return this._notas;
    };
    Persona.prototype.setNotas = function (notas) {
        this._notas = notas;
    };
    Persona.prototype.obtenerDatos = function () {
        return {
            Nombre: this._nombre,
            Apellidos: this._apellidos,
            Edad: this._edad,
            Dni: this._DNI,
            Cumpleanos: this._cumpleaños,
            Colorfavorito: this._colorfav,
            Sexo: this._sexo,
            Direcciones: this._direcciones.map(function (direccion) { return direccion.obtenerDatos(); }),
            Mails: this._mails.map(function (mail) { return mail.obtenerDatos(); }),
            Telefonos: this._telefonos.map(function (telefono) { return telefono.obtenerDatos(); }),
            Notas: this._notas
        };
    };
    Persona.prototype.agregarDireccion = function (direccion) {
        this._direcciones.push(direccion);
    };
    Persona.prototype.agregarMail = function (mail) {
        this._mails.push(mail);
    };
    Persona.prototype.agregarTelefono = function (telefono) {
        this._telefonos.push(telefono);
    };
    return Persona;
}());
exports.Persona = Persona;
