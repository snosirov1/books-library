import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookListItemsService } from '../book-list-items.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})

export class BooksListComponent implements OnInit {
  listOfBooks: Array<Book> = [];
  selectedBook: Book;
  editMode: boolean;

  constructor(
    private router: Router,
    private booksService: BookListItemsService
  ) { }

  ngOnInit() {
    this.listOfBooks = this.booksService.getAllBooks();
  }

  selectABook(book: Book) {
    this.selectedBook = book;
    this.editMode = false;
    this.navigate();
  }

  turnEditModeOn() {
    this.editMode = true;
    this.navigate();
  }

  addNewBook() {
    this.router.navigateByUrl('add');
  }

  private navigate() {
    const navingRoute = ['book', this.selectedBook.id];

    if (this.editMode) {
      navingRoute.push('edit');
    }
    this.router.navigate(navingRoute);
  }
}

