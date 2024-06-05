import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  output,
} from '@angular/core';
import { Ingredients } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  editedItemId: number;
  subscription: Subscription;
  editMode = false;
  editedItem: Ingredients;
  @ViewChild('f') slForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (id: number) => {
        this.editMode = true;
        this.editedItemId = id;
        this.editedItem = this.shoppingListService.getIngredient(id);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    // this.shoppingListService.startedEditing.next(null);
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredients(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(
        this.editedItemId,
        newIngredient
      );
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.editMode = false;
    this.slForm.reset();
  }

  onDelete() {
    this.onClear();
    this.editMode = false;
    this.shoppingListService.deleteIngredient(this.editedItemId);
  }
}
