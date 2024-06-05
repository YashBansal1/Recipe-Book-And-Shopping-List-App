import { Component, Input, OnDestroy, OnInit, input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  id: number;
  recipeChangedSub: Subscription;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recipeChangedSub = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];

      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  ngOnDestroy() {
    this.recipeChangedSub.unsubscribe();
  }

  onAddToShoppingList() {
    this.recipeService.onAddIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
