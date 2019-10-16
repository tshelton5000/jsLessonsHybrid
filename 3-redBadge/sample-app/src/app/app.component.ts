import { Component } from '@angular/core';

interface createdObj{
  a: string,
  b: number,
  c: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  strParam: string = 'start';
  numParam: number = 0;
  boolParam: boolean = true;

  objArr: Array<createdObj> = [];

  objFactory = class {
    a: string;
    b: number;
    c: boolean
    constructor(a: string, b: number, c: boolean){
      this.a = a;
      this.b = b;
      this.c = c;
    }

    logProps(): void{
      console.log(this.a, this.b, this.c);
    }
  }

  createObj(): void{
    this.strParam += '!';
    this.numParam += 1;
    this.boolParam = !this.boolParam;
    this.objArr.push(new this.objFactory(this.strParam, this.numParam, this.boolParam));
    console.log(this.objArr[this.objArr.length - 1]);
  }
}
