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

}


