import { Component } from '@angular/core';
import { ProductsServices} from '../../services/products.services';
import { OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit{
  ngOnInit(): void {
    this.productServices.listProduct().subscribe(
      (data: any) => {
        console.log(data)
          this.productos = (data.payload)
      });

  }
  title = 'Lista Productos';
  productos:any[]=[];
  constructor(private productServices: ProductsServices){
    this.productos=[
      {codigo:1, nombre:"Sayan", precio:10.00},
      {codigo:2, nombre:"Gustavo", precio:20.00}
      
    ]
  }
}
