import { Component } from '@angular/core';
import { ProductsServices} from '../../services/products.services';
import { OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { throwError, Observable } from 'rxjs';

@Component({
  selector: 'products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.scss']
})
export class ProductsCreateComponent implements OnInit{
  ngOnInit(){

  } 
  
  title = 'Agregar Producto';
  agregar_producto(){
    console.log("Error")
    console.log(this.nombreproducto)
    console.log(this.idproducto)
    console.log(this.descripcionproducto)
    console.log(this.precioproducto)
    console.log(this.cantidadproducto)
      this.productServices.createProduct({
      "id": this.idproducto,
      "nombre": this.nombreproducto, 
      "descripcion": this.descripcionproducto, 
      "precio Q": this.precioproducto,
      "cantidad": this.cantidadproducto,
      "idTipoProducto": 1


    })

  }
    
  productos: any;
  public nombreproducto ="";
  public idproducto ="";
  public descripcionproducto ="";
  public precioproducto = 0.00;
  public cantidadproducto = 0 ;
  constructor(private productServices: ProductsServices){
  }
}