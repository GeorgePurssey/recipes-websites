const searchInput = document.querySelector('search-input');
const searchButton = document.querySelector('search-button');
const recipesList = document.querySelector('recipes-list');


searchButton.addEventListener('click', fetchRecipes);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        fetchRecipes();
    }
});


async function fetchRecipes() {
        const query = searchInput.value.trim();
        if (!query) {
            alert('Please enter a recipe name');
        }


        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const  data = await response.json();

        if (data.meals) {
            displayRecipes(data.meals);
        }else   {
            recipeList.innerHTML = '<p class="text-center fs-4 text-muted">No recipes found Try a different One!</p>';
        }
}





