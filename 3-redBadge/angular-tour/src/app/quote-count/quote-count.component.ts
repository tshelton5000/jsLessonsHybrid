import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Quote } from '../models/quote';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-quote-count',
  templateUrl: './quote-count.component.html',
  styleUrls: ['./quote-count.component.css']
})
export class QuoteCountComponent implements OnInit {
  @Input() quotes: Quote[];

  @Output() customEvent: EventEmitter<number> = new EventEmitter();

  randNum: number = Math.random();

  constructor() { }

  emitEvent(){
    this.customEvent.emit(42);
  }

  ngOnInit() {
  }

}
