import { Component } from '@angular/core';
import myCategories, {Category} from './mocks/categories';
import { mockBooks, Book } from './mocks/books';
import { AppService } from './services/app.service';



@Component({
  selector: 'bookstore',
  // template: ``,
  templateUrl: '../app/app.template.html',
  providers: [ AppService ]
})

export class AppComponent {
  books: Book [] ;
  categories: Category[];
  navClosed: Boolean = true;
  selCat: String = 'All';
  private searchString;

  constructor(private appService: AppService){
   //empty constructor
  }

  public ngOnInit(){
    this.appService.getBooks().then((books) => {
      this.books = books;

    });

    this.appService.getCategories().then(categories => {
      this.categories = categories;

    });
  }

  clicked(selectedCategory: Category): void {
    this.categories = this.categories.map(category => {
      if(category === selectedCategory)
        category.selected = true;
      else
        category.selected = false;
      return category;
    });

    this.filterBooks(selectedCategory);
  }

  filterBooks(category: Category): void {
    if(category.name === "All") {
      this.books = mockBooks;
      return;
    }
    this.books = mockBooks.filter(book => book.category === category.name);
  }


  search(){
    console.log(this.searchString);
    this.books = mockBooks.filter(b => b.category.toLowerCase().includes(this.searchString.toLowerCase()) || b.title.toLowerCase().includes(this.searchString.toLowerCase()));

  }


  toggleSideBar(){
    this.navClosed = !this.navClosed;
  }
}
