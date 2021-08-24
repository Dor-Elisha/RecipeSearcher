// Search for the input value that the user type
$('.recips').hide()
$('#food').on('keypress',function(e) {
    if(e.which == 13) {
        const food = $('#food').val();
        $('.recipes').remove();
        searchIt(food);
    }
});

// Getting api for the food category that the user type
async function searchIt(category){
    const appId = '9cf104ab';
    const appKey = '9ec93ed721cb87af315aab746ae7befa';

    const response = await fetch(`https://api.edamam.com/api/recipes/v2?app_id=${appId}&app_key=${appKey}&q=${category}&type=public`)
    let data = await response.json();
    console.log(data);
    let foodRecipes = data.hits;
    if (data.to !== 0) {
        makeARecipeDiv(foodRecipes);
    } else {
        alert('no result for this food category')
    }
};

// Make a recipe div with all the information for the food category
function makeARecipeDiv(foodRecipes) {
    let i = 0;
    $('main').append(`
    <section class="recipes">
    </section>
    `)
    foodRecipes.map( food => {
        $('.recipes').append(`
        <div class="card mb-3" style="max-width: 450px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${food.recipe.image}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title text-truncate">${food.recipe.label}</h5>
              <p class="card-text">
                <button class="btn btn-primary" type="button" disabled>Type: ${food.recipe.cuisineType}</button>
              </p>
              <p class="card-text">
                <button class="btn btn-primary" type="button" disabled>calories: ${Math.round(food.recipe.calories)}</button>
              </p>
            </div>
          </div>
        </div>
      </div>
        `)

        i++;
    })
}