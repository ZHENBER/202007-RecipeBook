import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { RecipeService } from "../../service/recipe.service";
import { Recipe } from "../../models/recipe.model";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  index;
  recipe: Recipe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    // observable
    // this.activatedRoute.queryParams.subscribe({
    //   next: queryParams => {
    //     console.log("subscribe query params: ", queryParams.id);
    //     // this.recipe = this.recipeService.getRecipe(queryParams.id);
    //     this.getRecipe();
    //   }
    // });
    this.activatedRoute.params.subscribe({
      next: (params: Params) => {
        this.index = params["idx"];
        console.log(params);
        // this.recipe = this.recipeService.getRecipe(this.index);
        this.getRecipe();
      }
    });
  }

  getRecipe(){
   this.recipe = this.recipeService.getRecipe(this.index);
  }
}
