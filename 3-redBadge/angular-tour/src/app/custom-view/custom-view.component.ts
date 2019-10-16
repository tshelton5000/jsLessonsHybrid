import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
  AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-custom-view',
  templateUrl: './custom-view.component.html',
  styleUrls: ['./custom-view.component.css']
})
export class CustomViewComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  message: string = 'this is a sample message';

  disabled: boolean = false;

  input: string = '';

  constructor() { }

  disableFunc(){
    this.disabled = !this.disabled;
  }

  ngOnInit() {
    console.log('OnInit');
  }

  ngOnChanges(){
    console.log('OnChanges');
  }

  ngDoCheck(){
    console.log('DoCheck');
  }

  ngAfterContentInit(){
    console.log('AfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('AfterContentChecked');
  }

  ngAfterViewInit(){
    console.log('AfterViewInit');
  }

  ngAfterViewChecked(){
    console.log('AfterViewChecked');
  }

  ngOnDestroy(){
    console.log('OnDestroy');
  }
}
