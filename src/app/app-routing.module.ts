import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BookDetailsComponent
  },
  {
    path: 'add',
    component: BookDetailsComponent
  },
  {
    path: 'book',
    children: [
      {
        path: ':id',
        component: BookDetailsComponent,
      },
      {
        path: ':id/edit',
        component: BookDetailsComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
