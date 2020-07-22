import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "../recipes/recipes.component";

const routes: Routes = [
  { path: '', redirectTo: 'recipe', pathMatch: 'full' }, // [url]/
  { path: 'recipes', component: RecipesComponent }, // [url]/recipes
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) // import router module and define routes
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}