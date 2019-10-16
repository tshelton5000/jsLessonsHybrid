import { Component, OnInit } from '@angular/core';
import { KanyeRestService } from '../kanye-rest.service';
import { forkJoin } from 'rxjs';

import { Quote } from '../models/quote';

@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']
})
export class QuoteDisplayComponent implements OnInit {
  quotes: Quote[];

  constructor(private quoteService: KanyeRestService) { }

  eventLog(e){
    console.log(e);
  }

  ngOnInit(): void {
    let quote = this.quoteService.getQuote();

    forkJoin([quote, quote, quote])
      .subscribe((results: Quote[]) => this.quotes = results.filter(quote => quote.quote))
  }

}
