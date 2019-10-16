import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface NasaPic{
  copyright: string,
  date: string,
  explanation: string,
  hdurl: string,
  media_type: string,
  service_version: string,
  title: string,
  url: string
}

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private http: HttpClient) { }

  getPic(){
    return this.http.get<NasaPic>('https://api.nasa.gov/planetary/apod?api_key=8Pm9o41ZhKniOUmRfqBlQqVfnirSj09atMhnyU6I')
  }
}
