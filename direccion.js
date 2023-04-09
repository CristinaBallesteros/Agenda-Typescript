"use strict";
exports.__esModule = true;
exports.Direccion = void 0;
var Direccion = /** @class */ (function () {
    function Direccion(calle, numero, piso, letra, codigopostal, poblacion, provincia) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigopostal = codigopostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
    Direccion.prototype.getCalle = function () {
        return this._calle;
    };
    Direccion.prototype.setCalle = function (nombre) {
        this._calle = nombre;
    };
    Direccion.prototype.getNumero = function () {
        return this._numero;
    };
    Direccion.prototype.setNumero = function (numero) {
        this._numero = numero;
    };
    Direccion.prototype.getPiso = function () {
        return this._piso;
    };
    Direccion.prototype.setPiso = function (piso) {
        this._piso = piso;
    };
    Direccion.prototype.getLetra = function () {
        return this._letra;
    };
    Direccion.prototype.setLetra = function (letra) {
        this._letra = letra;
    };
    Direccion.prototype.getCodigopostal = function () {
        return this._codigopostal;
    };
    Direccion.prototype.setCodigopostal = function (codigopostal) {
        this._codigopostal = codigopostal;
    };
    Direccion.prototype.getPoblacion = function () {
        return this._poblacion;
    };
    Direccion.prototype.setPoblacion = function (poblacion) {
        this._poblacion = poblacion;
    };
    Direccion.prototype.getprovincia = function () {
        return this._provincia;
    };
    Direccion.prototype.setprovincia = function (provincia) {
        this._provincia = provincia;
    };
    Direccion.prototype.obtenerDatos = function () {
        return "Direcci\u00F3n: ".concat(this._calle, " ").concat(this._numero, ", ").concat(this._piso).concat(this._letra, " ").concat(this._codigopostal, " ").concat(this._poblacion, " (").concat(this._provincia, ")");
    };
    return Direccion;
}());
exports.Direccion = Direccion;
