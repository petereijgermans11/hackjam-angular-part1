import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'bs-book-list',
    templateUrl: 'booklist.template.html'
})

export class BookListComponent {

    @Input() books;

}



