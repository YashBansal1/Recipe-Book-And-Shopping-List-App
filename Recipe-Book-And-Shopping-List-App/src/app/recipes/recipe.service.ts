import { EventEmitter, Injectable, output } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredients } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  //   recipeSelected = new Subject<Recipe>();
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];

  constructor(
    private shoppingListService: ShoppingListService,
    private http: HttpClient
  ) {}

  getRecipes() {
    return this.recipes.slice(); //to not to return the direct reference of the array.
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  onAddIngredientsToShoppingList(ingredients: Ingredients[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  updateRecipe(id: number, updatedRecipe: Recipe) {
    this.recipes[id] = updatedRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  storeRecipes() {
    this.http
      .put(
        'https://ng-course-recipe-book-4bc36-default-rtdb.firebaseio.com/recipes.json',
        this.recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipes() {
    this.http
      .get<Recipe[]>(
        'https://ng-course-recipe-book-4bc36-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            }; //to avoid undefined error
          });
        })
      )
      .subscribe((recipes) => {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      });
  }
}
