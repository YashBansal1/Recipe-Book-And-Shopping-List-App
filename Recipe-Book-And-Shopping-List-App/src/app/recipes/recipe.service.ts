import { EventEmitter, output } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/2022-09-23GFOWEBFamilyRecipes-OnePotGarlicChicken05875preview-d8a4a42.jpg?quality=90&resize=556,505'
    ),
    new Recipe(
      'A Test 2 Recipe',
      'This is simply a test 2',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/2022-09-23GFOWEBFamilyRecipes-OnePotGarlicChicken05875preview-d8a4a42.jpg?quality=90&resize=556,505'
    ),
  ];

  getRecipes() {
    return this.recipes.slice(); //to not to return the direct reference of the array.
  }
}
