export class Producto{
  //creamos las variables a consultar en base de datos
  _id?: Number;
  nombre: String;
  categoria: String;
  ubicacion: String;
  precio: Number;

  // creamos el constructyor para instancia las valirables
  constructor( nombre: String, categoria: String, ubicacion: String, precio: Number){
    this.nombre = nombre;
    this.categoria = categoria;
    this.ubicacion = ubicacion;
    this.precio = precio;

  }
}
