import { Component } from '@angular/core';
import { ProductsServices} from '../../services/products.services';
import { OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { throwError, Observable } from 'rxjs';

@Component({
  selector: 'products-delete',
  templateUrl: './products-delete.component.html',
  styleUrls: ['./products-delete.component.scss']
})
export class ProductsDeleteComponent implements OnInit{
  ngOnInit(){
    

  }
    

  title = 'Eliminar Producto';
  eliminar_producto(){
    console.log("Error")
    console.log(this.idproducto)
    this.productServices.deleteProduct({
      "id": this.idproducto


    })
    

}
public idproducto ="";
  constructor(private productServices: ProductsServices){

  }
}