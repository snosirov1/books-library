import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookListItemsService } from '../book-list-items.service';
import { FormGroup, NgForm, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  currentBook: Book;

  bookDetailForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private booksService: BookListItemsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.bookDetailForm = new FormGroup(
      {
        'id': new FormControl(null, Validators.required),
        'name': new FormControl(null, Validators.required),
        'author': new FormControl(null, Validators.required),
        'ISBNCode': new FormControl(null, Validators.required),
        'totalAmount': new FormControl(null, Validators.required),
        'publishDate': new FormControl(null, Validators.required),
        'category': new FormControl(null, Validators.required),
        'issuedAmount': new FormControl(null, Validators.required),
      }
    );

    this.bookDetailForm.valueChanges
      .subscribe(this.booksService.saveABook);

    this.activatedRoute.url.subscribe((url) => {
      if (!url.length) {
        return;
      }

      const bookOrAdd = url[0].path;

      if (bookOrAdd === 'add') {
        this.addABook();
        return;
      }

      this.currentBook = this.booksService.getABook(+bookOrAdd);

      const mode = url[1];
      if (mode && mode.path === 'edit') {
        this.bookDetailForm.enable();
      } else {
        this.bookDetailForm.disable();
      }

      this.bookDetailForm.setValue(this.currentBook);
    });
  }

  addABook() {
    this.booksService.addABookToDatabase();
    this.router.navigateByUrl('');
  }

}
