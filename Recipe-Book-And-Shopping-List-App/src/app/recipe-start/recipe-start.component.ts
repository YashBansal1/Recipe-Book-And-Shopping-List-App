import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrl: './recipe-start.component.css',
})
export class RecipeStartComponent implements OnInit {
  flag = false;
  constructor(private recipeService: RecipeService) {}
  ngOnInit() {
    this.recipeService.recipesChanged.subscribe((recipes) => {
      this.flag = recipes.length > 0 ? true : false;
    });
  }
}
