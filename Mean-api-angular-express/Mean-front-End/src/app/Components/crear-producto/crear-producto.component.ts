import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../../models/Producto';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss'],
})
export class CrearProductoComponent implements OnInit {
  ProductoForm: FormGroup;
  titulo = 'Crear producto';
  id: string | null;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _productoService: ProductosService,
    private aRouter: ActivatedRoute
  ) {
    this.ProductoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required],
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarProducto() {
    const PRODUCTO: Producto = {
      nombre: this.ProductoForm.get('producto')?.value,
      categoria: this.ProductoForm.get('categoria')?.value,
      ubicacion: this.ProductoForm.get('ubicacion')?.value,
      precio: this.ProductoForm.get('precio')?.value,
    };

    if (this.id !== null) {
      //editar producto
      this._productoService.editarProducto(this.id, PRODUCTO).subscribe(
        (data) => {
          this.toastr.info(
            'El producto fue axtualizado con exito!',
            'Producto actializado !'
          );
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
          this.ProductoForm.reset();
        }
      );
    } else {
      // agregar producto
      console.log(PRODUCTO);
      this._productoService.guardarProducto(PRODUCTO).subscribe(
        (data) => {
          this.toastr.success(
            'El producto se registro!',
            'Registrado Con exito !'
          );
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
          this.ProductoForm.reset();
        }
      );
    }

    console.log(PRODUCTO);
    this._productoService.guardarProducto(PRODUCTO).subscribe(
      (data) => {
        this.toastr.success(
          'El producto se registro!',
          'Registrado Con exito !'
        );
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
        this.ProductoForm.reset();
      }
    );
  }

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar producto';
      this._productoService.obtenerProducto(this.id).subscribe((data) => {
        this.ProductoForm.setValue({
          producto: data.nombre,
          categoria: data.categoria,
          ubicacion: data.ubicacion,
          precio: data.precio,
        });
      });
    }
  }
}
