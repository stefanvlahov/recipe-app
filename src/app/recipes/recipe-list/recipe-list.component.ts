import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a Test',
      'https://c.pxhere.com/photos/8a/c5/food_chicken_cooking_barbecue_dining_dining_room_eat_fusion_cuisine-1373210.jpg!d'),
    new Recipe('A Test Recipe',
      'This is simply a Test',
      'https://c.pxhere.com/photos/8a/c5/food_chicken_cooking_barbecue_dining_dining_room_eat_fusion_cuisine-1373210.jpg!d')
  ];

  constructor() { }

  ngOnInit() {
  }

}
