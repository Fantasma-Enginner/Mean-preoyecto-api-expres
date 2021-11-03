import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Producto} from '../../models/Producto';
import { ProductosService } from '../../services/productos.service';


@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.scss']
})
export class ListarProductosComponent implements OnInit {
   ListaProducto: Producto[] = [];
  constructor( private _productoService: ProductosService,
               private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(){
    this._productoService.getProducto().subscribe(data => {
      console.log(data);
      this.ListaProducto = data;
    },error =>{
      console.log(error);
    })
  }

  eliminarProducto(id: any){
    this._productoService.eliminarProducto(id).subscribe(data =>{
      this.toastr.error('El producto se elimino correcta mente',' Producto eliminado');
      this.obtenerProductos();
  }, error =>{
    console.log(error);
  })
  }

}
