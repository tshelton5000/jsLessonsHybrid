import { Component, OnInit } from '@angular/core';
import {NasaService} from '../nasa.service';
import { NasaPic } from '../nasa.service';

@Component({
  selector: 'app-nasa-pic',
  templateUrl: './nasa-pic.component.html',
  styleUrls: ['./nasa-pic.component.css'],
  providers: [NasaService]
})
export class NasaPicComponent implements OnInit {

  picUrl: string;
  testProp: string;

  constructor(private nasaService: NasaService) {
    this.picUrl = '';
  }

  ngOnInit() {
    this.nasaService.getPic()
      .subscribe((data: NasaPic) => {
        this.picUrl = data['url'];
        this.testProp = data['title']
      })
  }

}
// title: string,