import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

// Este arreglo contiene todas lasa rutas que vamos a renderizar

const routes: Routes = [
  {
    path:'',
    component: TodoListComponent
  },
  {
    path: 'todo-list',
    component: TodoListComponent
  },
  {
    path:'todo-list/create',
    component: TodoFormComponent
  },
  {
    path:'todo-list/edit/:id',
    component: TodoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
