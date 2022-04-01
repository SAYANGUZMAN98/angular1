import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsCreateComponent } from '../products/products-create/products-create.component';
import { ProductsDeleteComponent } from '../products/products-delete/products-delete.component';
import { ProductsEditComponent } from '../products/products-edit/products-edit.component';
import { ProductsListComponent } from '../products/products-list/products-list.component';
import { ProductsServices } from '../services/products.services';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    ProductsCreateComponent,
    ProductsDeleteComponent,
    ProductsEditComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule

  ],
  providers: [ProductsServices],
  bootstrap: [AppComponent, ProductsCreateComponent, ProductsDeleteComponent, ProductsEditComponent, ProductsListComponent]
})
export class AppModule { }
