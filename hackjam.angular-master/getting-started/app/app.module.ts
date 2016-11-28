
// Entry point of our application

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BookListComponent }  from './components/book/booklist.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule  ], // Inject built-in modules
  declarations: [ AppComponent, BookListComponent, MenuComponent ], // Inject your own modules
  bootstrap:    [ AppComponent ] // Module you need to bootstrap
})
export class AppModule { }
