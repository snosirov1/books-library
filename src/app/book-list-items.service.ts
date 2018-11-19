import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookListItemsService {
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
  ];
  savedBook: Book;

  constructor() { }

  getAllBooks() {
    return this.listOfBooks;
  }

  getABook(bookId: number) {
    return this.listOfBooks.filter(eachBook => eachBook.id === bookId)[0];
  }

  saveABook = (book: Book) => {
    this.savedBook = {...book};
  }

  addABookToDatabase() {
    this.listOfBooks.push(this.savedBook);
    console.log(this.savedBook, 'saved');
  }
}
