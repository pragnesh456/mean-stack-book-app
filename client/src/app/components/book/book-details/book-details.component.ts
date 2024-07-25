// Decorators and Lifehooks
import { Component, OnInit } from '@angular/core';

// Router
import { Router, ActivatedRoute } from '@angular/router';

// Services
import { BookService } from '../../../core/services/book.service';
import { HelperService } from '../../../core/services/helper.service';

// Models
import { Book } from '../../../core/models/book.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book;
  bookId: string;
  userId: string;
  isLogged: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService,
    private helperService: HelperService
  ) { }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('bookId');
    this.isLogged = this.helperService.isLoggedIn();
    this.userId = this.helperService.getProfile().id;

    this.bookService
      .getSingleBook(this.bookId)
      .subscribe((res) => {
        this.book = res.data;
      });
  }

}
