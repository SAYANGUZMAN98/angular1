import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsCreateComponent } from 'src/products/products-create/products-create.component';
import { ProductsDeleteComponent } from 'src/products/products-delete/products-delete.component';
import { ProductsEditComponent } from 'src/products/products-edit/products-edit.component';
import { ProductsListComponent } from 'src/products/products-list/products-list.component';

const routes: Routes = [
  {
    path: "create",
    component: ProductsCreateComponent,
    data: {
      title: "Agregar Productos"
    }
  },
  {
    path: "edit",
    component: ProductsEditComponent,
    data: {
      title: "Editar Productos"
    }
  },
  {
    path: "delete",
    component: ProductsDeleteComponent,
    data: {
      title: "Eliminar Productos"
    }
  },
  {
    path: "list",
    component: ProductsListComponent,
    data: {
      title: "Listar Productos"
    },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
