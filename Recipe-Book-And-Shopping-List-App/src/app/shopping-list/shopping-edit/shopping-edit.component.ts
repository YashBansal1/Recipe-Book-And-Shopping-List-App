import { Component, ElementRef, ViewChild, output } from '@angular/core';
import { Ingredients } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  newIngredient = output<Ingredients>();
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  onAddItem() {
    console.log(this.nameInputRef);
    console.log(this.amountInputRef);
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredients(name, amount);
    this.newIngredient.emit(newIngredient);
  }
}
