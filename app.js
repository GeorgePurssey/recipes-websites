// DOM Elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');
const recipeList = document.getElementById('recipe-list');

// Event Listeners
searchButton.addEventListener('click', fetchRecipes);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        fetchRecipes();
    }
});

// Fetch Recipes Function
async function fetchRecipes() {
    const query = searchInput.value.trim(); // Get user input
    if (!query) {
        alert('Please enter a search term!');
        return;
    }

    // Fetch data from TheMealDB API
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await response.json();

    // Check if results exist
    if (data.meals) {
        displayRecipes(data.meals);
    } else {
        recipeList.innerHTML = '<p class="text-center fs-4 text-muted">No recipes found. Try a different search!</p>';
    }
}

// Display Recipes Function
function displayRecipes(meals) {
    recipeList.innerHTML = ''; // Clear previous results

    meals.forEach((meal) => {
        // Create a column for each card
        const col = document.createElement('div');
        col.classList.add('col-lg-4', 'col-md-6', 'col-sm-12');

        // Create the recipe card
        col.innerHTML = `
      <div class="recipe-card card">
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="card-img-top">
        <div class="card-body text-center">
          <h3 class="card-title">${meal.strMeal}</h3>
          <button 
            class="btn btn-dark mt-2" 
            onclick="viewRecipe('${meal.idMeal}')"
          >
            View Recipe
          </button>
        </div>
      </div>
    `;

        // Append the card to the row
        recipeList.appendChild(col);
    });
}

// View Recipe Function
async function viewRecipe(id) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    const meal = data.meals[0];


// need to create a new page for recipe will add later
    alert(`Recipe: ${meal.strMeal}\n\nInstructions:\n${meal.strInstructions}`);
}
