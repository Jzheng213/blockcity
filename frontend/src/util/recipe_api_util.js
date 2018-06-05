import $ from 'jquery';
import { YUMMLY_API_ID, YUMMLY_API_KEY } from '../secret';

export const fetchRecipesByIngredients = (ingredients) => {
  return $.ajax({
    url: `http://api.yummly.com/v1/api/recipes?_app_id=${YUMMLY_API_ID}&_app_key=${YUMMLY_API_KEY}&q=${ingredients}`,
    method: 'GET',
  });
};
