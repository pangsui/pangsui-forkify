import * as model from './model.js';
import icons from 'url:../img/icons.svg';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    // load spinner
    recipeView.renderSpinner();
    // loading recipe
    await model.loadRecipe(id);
    const recipe = model.state.recipe;
    // rendering Recipe
    recipeView.render(recipe);
  } catch (error) {
    alert(error);
  }
};

// controlRecipe();

// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load', controlRecipe);
// ['hashchange', 'load'].forEach(e => window.addEventListener(e, controlRecipe));
function init() {
  recipeView.addHandleRender(controlRecipe);
}

init();
