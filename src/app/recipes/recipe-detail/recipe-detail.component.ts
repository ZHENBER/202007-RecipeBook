import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RecipeService } from "../../service/recipe.service";
import { Recipe } from "../../models/recipe.model";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    // observable
    this.activatedRoute.queryParams.subscribe({
      next: queryParams => {
        console.log("subscribe query params: ", queryParams.id);
        this.recipe = this.recipeService.getRecipe(queryParams.id);
      }
    });
  }
}
