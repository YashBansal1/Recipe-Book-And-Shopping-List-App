import { Component, Input, Output, output } from '@angular/core';
import { Ingredients } from '../../../shared/ingredient.model';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() id: Number;

  constructor(private recipeService: RecipeService) {}
}
