import * as model from './model.js'; // imports all the exports from the file
import recipeView from './views/recipeView.js';


import 'core-js/stable'; // importing after installing from npm
import 'regenerator-runtime/runtime'; // same

//console.log(icons); // logs the path of the icon file  

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const renderSpinner = function(parentEl) { // using the same markup variable
  const markup = ` 
  <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>
  `;
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
}

const controlRecipes = async function() {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if(!id) return; // guard clause
    recipeView.renderSpinner(); 

    // 1) Loading Recipe
    await model.loadRecipe(id); // this is an async function , it returns a promise , thus we have to await
    const {recipe} = model.state;
   
    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err); // this alerts the error that we try in the catch block
  }
};

['hashchange', 'load'].forEach(ev => window.addEventListener(ev, showRecipe))
// instad of event handlers for the same function we can do a loop as demonstrated above
// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);


