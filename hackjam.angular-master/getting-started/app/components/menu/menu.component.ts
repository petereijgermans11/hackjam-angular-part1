import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'bs-menu',
    templateUrl: 'menu.template.html'
})

export class MenuComponent {

    @Input() categories;
    @Output() categoryChanged = new EventEmitter();

    changeCategory(category) : void {
        this.categoryChanged.emit(category);
        category.selected = true;
    }

}

