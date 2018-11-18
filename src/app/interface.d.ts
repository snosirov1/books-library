interface Book {
  id: string | number;
  name: string;
  author: string;
  ISBNCode: number | string;
  totalAmount: number;
  publishDate: string;
  category: string;
  issuedAmount: number;
}

type BookProperties = 'id' | 'name' | 'author' | 'ISBNCode' | 'totalAmount' | 'publishDate' | 'catergory' | 'issuedAmount';

interface Transaction {
  bookId: string | number;
  date: string;
  type: 'issue' | 'return';
}

type TransactionProperties = 'bookId' | 'date' | 'type';
