import { TestBed } from '@angular/core/testing';

import { BookListItemsService } from './book-list-items.service';

describe('BookListItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookListItemsService = TestBed.get(BookListItemsService);
    expect(service).toBeTruthy();
  });
});
