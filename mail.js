"use strict";
exports.__esModule = true;
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(tipo, direccion) {
        this._tipo = tipo;
        this._direccion = direccion;
    }
    Mail.prototype.getTipo = function () {
        return this._tipo;
    };
    Mail.prototype.setTipo = function (tipo) {
        this._tipo = tipo;
    };
    Mail.prototype.getDireccion = function () {
        return this._direccion;
    };
    Mail.prototype.setDireccion = function (direccion) {
        this._direccion = direccion;
    };
    Mail.prototype.obtenerDatos = function () {
        return "Tipo: ".concat(this._tipo, ", Direcci\u00F3n: ").concat(this._direccion);
    };
    return Mail;
}());
exports.Mail = Mail;
