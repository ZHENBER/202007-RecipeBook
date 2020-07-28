import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "../recipes/recipes.component";
import { ShoppingListComponent } from "../shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "../recipes/recipe-detail/recipe-detail.component";

const routes: Routes = [
  { path: "#", redirectTo: "recipes" }, // [url]/
  { path: "recipes", component: RecipesComponent,// [url]/recipes
    children: [
      { path: ":idx", component: RecipeDetailComponent }// [url]/recipes/
    ] 
  },
  { path: "shopping-list", component: ShoppingListComponent } // [url]/shopping-list
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
