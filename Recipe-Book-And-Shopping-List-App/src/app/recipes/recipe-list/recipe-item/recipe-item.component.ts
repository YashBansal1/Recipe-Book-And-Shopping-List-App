import { Component, Input, Output, output } from '@angular/core';
import { Ingredients } from '../../../shared/ingredient.model';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  selectedRecipe = output<void>();
  @Input() recipe: Recipe;

  onSelected() {
    this.selectedRecipe.emit();
  }
}
