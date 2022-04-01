import { Component } from '@angular/core';
import { ProductsServices} from '../../services/products.services';
import { OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { throwError, Observable } from 'rxjs';

@Component({
  selector: 'products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.scss']
})
export class ProductsEditComponent implements OnInit{
  ngOnInit(){

  } 
  
  title = 'Editar Producto';
  editar_producto(){
    console.log("Error")
      this.productServices.createProduct({
      "id": this.idproducto,
      "nombre": this.nombreproducto, 
      "descripcion": this.descripcionproducto, 
      "precio Q": this.precioproducto,
      "cantidad": this.cantidadproducto,
      "idTipoProducto": 1
    })

  }
  products: any;
  public nombreproducto ="";
  public idproducto ="";
  public descripcionproducto ="";
  public precioproducto = 0.00;
  public cantidadproducto = 0 ;
  constructor(private productServices: ProductsServices){
  }
}
