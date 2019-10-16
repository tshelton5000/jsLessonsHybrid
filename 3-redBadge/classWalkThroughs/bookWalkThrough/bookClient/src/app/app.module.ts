import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { DisplayBooksComponent } from './display-books/display-books.component';
import { DatabaseService } from './services/database.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DisplayBooksComponent,
    CreateBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DatabaseService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
