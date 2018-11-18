import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';

const routes: Routes = [
  {
    path: 'book',
    children: [
      {
        path: ':id',
        component: BooksListComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
