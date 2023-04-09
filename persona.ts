import{Direccion} from "./direccion";
import{Mail} from "./mail";
import{Telefono} from "./telefono";

export class Persona{
    private _nombre: string;
    private _apellidos: string;
    private _edad: number;
    private _DNI: string;
    private _cumpleaños: string;
    private _colorfav: string;
    private _sexo: string;
    private _direcciones: Direccion[];
    private _mails: Mail[];
    private _telefonos: Telefono[];
    private _notas: string;

    constructor(a:string,b:string,c:number,d:string,e:string,f:string,g:string,h:Direccion[],i:Mail[],j:Telefono[],k:string){
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
    public getNombre(): string {
        return this._nombre;
    }
        
    public setNombre(nombre: string): void {
        this._nombre = nombre;
    }
        
    public getApellidos(): string {
        return this._apellidos;
    }
        
    public setApellidos(apellidos: string): void {
        this._apellidos = apellidos;
    }
        
    public getEdad(): number {
        return this._edad;
    }
        
    public setEdad(edad: number): void {
        this._edad = edad;
    }
        
    public getDni(): string {
        return this._DNI;
    }
        
    public setDni(dni: string): void {
        this._DNI = dni;
    }
        
    public getCumpleaños(): string{
        return this._cumpleaños;
    }
        
    public setCumpleaños(cumpleaños: string): void {
        this._cumpleaños = cumpleaños;
    }
        
    public getColorFavorito(): string {
        return this._colorfav;
    }
        
    public setColorFavorito(colorFavorito: string): void {
        this._colorfav = colorFavorito;
    }
        
    public getSexo(): string {
        return this._sexo;
    }
        
    public setSexo(sexo: string): void {
        this._sexo = sexo;
    }
        
    public getDirecciones(): Direccion[] {
        return this._direcciones;
    }
        
    public setDirecciones(direcciones: Direccion[]): void {
        this._direcciones = direcciones;
    }
        
    public getMails(): Mail[] {
        return this._mails;
    }
        
    public setMails(mails: Mail[]): void {
        this._mails = mails;
    }
        
    public getTelefonos(): Telefono[] {
        return this._telefonos;
    }
        
    public setTelefonos(telefonos: Telefono[]): void {
        this._telefonos = telefonos;
    }
        
    public getNotas(): string {
        return this._notas;
    }
        
    public setNotas(notas: string): void {
        this._notas = notas;
    }
    obtenerDatos(): any {
        return {
          Nombre: this._nombre,
          Apellidos: this._apellidos,
          Edad: this._edad,
          Dni: this._DNI,
          Cumpleanos: this._cumpleaños,
          Colorfavorito: this._colorfav,
          Sexo: this._sexo,
          Direcciones: this._direcciones.map((direccion) => direccion.obtenerDatos()),
          Mails: this._mails.map((mail) => mail.obtenerDatos()),
          Telefonos: this._telefonos.map((telefono) => telefono.obtenerDatos()),
          Notas: this._notas,
        };
      }
    
    agregarDireccion(direccion: Direccion): void {
        this._direcciones.push(direccion);
    }
    agregarMail(mail: Mail): void {
        this._mails.push(mail);
    }
    agregarTelefono(telefono: Telefono): void {
        this._telefonos.push(telefono);
    }

}