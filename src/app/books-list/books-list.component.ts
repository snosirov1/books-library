import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  listOfBooks = [
    {
      id: 1,
      name: 'one',
      author: 'One to One',
      ISBNCode: 12345,
      totalAmount:5,
      publishDate: 'Tue Oct 13 2018 16:33:03',
      category: 'fiction',
      issuedAmount: 0,
    },
    {
      id: 2,
      name: 'two',
      author: 'not included ',
      ISBNCode: 12345,
      totalAmount:5,
      publishDate: 'Tue Oct 13 2018 16:33:03',
      category: 'fiction',
      issuedAmount: 0,
    },
    {
      id: 1,
      name: 'one',
      author: 'One to One',
      ISBNCode: 12345,
      totalAmount: 5,
      publishDate: 'Tue Oct 13 2018 16:33:03',
      category: 'fiction',
      issuedAmount: 0,
    }
  ]


  constructor() { }

  ngOnInit() {}
}

