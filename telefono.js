"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(tipo, numero) {
        this._tipo = tipo;
        this._numero = numero;
    }
    Telefono.prototype.getTipo = function () {
        return this._tipo;
    };
    Telefono.prototype.setTipo = function (tipo) {
        this._tipo = tipo;
    };
    Telefono.prototype.getNumero = function () {
        return this._numero;
    };
    Telefono.prototype.setNumero = function (numero) {
        this._numero = numero;
    };
    Telefono.prototype.obtenerDatos = function () {
        return "Tipo: ".concat(this._tipo, ", N\u00FAmero: ").concat(this._numero);
    };
    return Telefono;
}());
exports.Telefono = Telefono;
