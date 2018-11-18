import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})

export class BooksListComponent implements OnInit {
  listOfBooks: Array<Book> = [
    {
      id: 1,
      name: 'Count Monte of Cristo',
      author: 'Alexander Dumas',
      ISBNCode: 553213504,
      totalAmount: 2,
      publishDate: 'Tue Oct 13 2018 16:33:03',
      category: 'fiction',
      issuedAmount: 500,
    },
    {
      id: 2,
      name: 'The Catcher in the Rye',
      author: 'J. D. Salinger',
      ISBNCode: 7543321726,
      totalAmount: 10,
      publishDate: 'Tue Oct 13 2018 16:33:03',
      category: 'fiction',
      issuedAmount: 200,
    },
    {
      id: 3,
      name: 'Gone With the Wind',
      author: 'Margaret Mitchell',
      ISBNCode: 1416548947,
      totalAmount: 5,
      publishDate: 'Tue Oct 13 2018 16:33:03',
      category: 'fiction',
      issuedAmount: 100,
    }
  ]


  constructor(private router: Router) { }

  ngOnInit() {}

  selectABook(book: Book) {
    this.router.navigate(['book', book.id]);
  }
}

