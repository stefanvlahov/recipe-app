import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Cake',
      'Carrot Cake',
      'https://cdn.pixabay.com/photo/2017/01/23/08/45/cake-2001781_960_720.jpg', [
        new Ingredient('Sugar', 3),
        new Ingredient('Carrot', 2)
      ]),
    new Recipe('Big Fat Burger',
      'What else?',
      'https://www.publicdomainpictures.net/pictures/240000/nahled/burger-on-a-wooden-backgound.jpg', [
        new Ingredient('Bread', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
