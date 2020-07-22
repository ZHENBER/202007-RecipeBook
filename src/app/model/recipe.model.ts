// import { Ingredient } from './ingredient.model';

export class Product {
  name: string;
  description: string;
  imagePath: string;
  // ingredients: Ingredient[];

  constructor(name, description, imagePath,
  //  ingredients: Ingredient[]
  ) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    // this.ingredients = ingredients;
  }
}
