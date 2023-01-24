import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';


// Este arreglo contiene todas lasa rutas que vamos a renderizar

const routes: Routes = [
  {
    path:'',
    component: ProductListComponent
  },
  {
    path: 'todo-list',
    component: ProductListComponent
  },
  {
    path:'todo-list/create',
    component: ProductFormComponent
  },
  {
    path:'todo-list/edit/:id',
    component: ProductFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
