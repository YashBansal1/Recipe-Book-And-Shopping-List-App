import { EventEmitter } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  // ingredientsChanged = new EventEmitter<Ingredients[]>();
  ingredientsChanged = new Subject<Ingredients[]>();
  startedEditing = new Subject<number>();

  ingredients: Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(id: number) {
    return this.ingredients[id];
  }

  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredients[]) {
    this.ingredients.push(...ingredients);
  }

  updateIngredient(id: number, newIngredient: Ingredients) {
    this.ingredients[id] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  deleteIngredient(id: number) {
    this.ingredients.splice(id, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
