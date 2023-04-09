export class Telefono{
    _tipo: string;
    _numero:number;

    constructor(tipo:string,numero:number){
        this._tipo=tipo;
        this._numero=numero;
    }
    public getTipo(): string {
        return this._tipo;
    }
        
    public setTipo(tipo: string): void {
        this._tipo= tipo;
    }
        
    public getNumero(): number {
        return this._numero;
    }
        
    public setNumero(numero: number): void {
        this._numero = numero;
    }

    obtenerDatos(): string {
        return `Tipo: ${this._tipo}, Número: ${this._numero}`;
    }
}