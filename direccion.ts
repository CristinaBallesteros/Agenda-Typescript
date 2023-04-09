export class Direccion {
    _calle: string;
    _numero: number;
    _piso: number;
    _letra: string;
    _codigopostal: number;
    _poblacion: string;
    _provincia: string;

    constructor(calle:string,numero:number, piso:number,letra:string,codigopostal:number,poblacion:string, provincia:string){
    this._calle=calle;
    this._numero=numero;
    this._piso=piso;
    this._letra=letra;
    this._codigopostal=codigopostal;
    this._poblacion=poblacion;
    this._provincia=provincia; 
    }

    public getCalle(): string {
        return this._calle;
    }
        
    public setCalle(nombre: string): void {
        this._calle= nombre;
    }
        
    public getNumero(): number {
        return this._numero;
    }
        
    public setNumero(numero: number): void {
        this._numero = numero;
    }
        
    public getPiso(): number {
        return this._piso;
    }
        
    public setPiso(piso: number): void {
        this._piso = piso;
    }
        
    public getLetra(): string {
        return this._letra;
    }
        
    public setLetra(letra: string): void {
        this._letra = letra;
    }
    public getCodigopostal(): number {
        return this._codigopostal;
    }
        
    public setCodigopostal(codigopostal: number): void {
        this._codigopostal = codigopostal;
    }
        
    public getPoblacion(): string {
        return this._poblacion;
    }
        
    public setPoblacion(poblacion: string): void {
        this._poblacion = poblacion;
    }
    public getprovincia(): string {
        return this._provincia;
    }
        
    public setprovincia(provincia: string): void {
        this._provincia = provincia;
    }

    public obtenerDatos(): string {
        return `Dirección: ${this._calle} ${this._numero}, ${this._piso}${this._letra} ${this._codigopostal} ${this._poblacion} (${this._provincia})`;
    }

}