// Decorators
import { NgModule } from '@angular/core';

// Modules
import { RouterModule, Routes } from '@angular/router';

// Components
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookDetailsComponent } from './book-details/book-details.component';

const bookRoutes: Routes = [
  {
    path: '',
    redirectTo: 'store/default',
    pathMatch: 'full'
  },
  {
    path: 'details/:bookId',
    component: BookDetailsComponent
  },
  {
    path: 'create',
    component: BookCreateComponent
  },
  {
    path: 'edit/:bookId',
    component: BookEditComponent
  },
  {
    path: 'delete/:bookId',
    component: BookDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(bookRoutes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
