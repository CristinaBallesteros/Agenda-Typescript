export class Mail{
    _tipo:string;
    _direccion:string;

    constructor(tipo:string,direccion:string){
        this._tipo=tipo;
        this._direccion=direccion;
    }
    public getTipo(): string {
        return this._tipo;
    }
        
    public setTipo(tipo: string): void {
        this._tipo= tipo;
    }
        
    public getDireccion(): string {
        return this._direccion;
    }
        
    public setDireccion(direccion: string): void {
        this._direccion = direccion;
    }

    obtenerDatos(): string {
        return `Tipo: ${this._tipo}, Dirección: ${this._direccion}`;
    }
}