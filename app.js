const foodSection2 = document.getElementById('foodSection2');
document.getElementById('search-btn').addEventListener('click', function () {
    const searchInput = document.getElementById('search-food-input').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
        .then(res => res.json())
        .then(data => mealsData(data.meals))
});
function mealsData(data) {
    foodSection2.style.display = "none";
    const foodSection = document.getElementById('foodSection');
    for (const food of data) {
        const div = document.createElement('div');
        div.classList = 'foodCard'
        div.innerHTML = `
        <img src='${food.strMealThumb}'>
            <h2>${food.strTags}</h2>
            <button>ODER</button>
        `;
        foodSection.appendChild(div)
        console.log(food.strInstructions)
    }
};
fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
    .then(res => res.json())
    .then(foods => food(foods.meals))
function food(foods) {
    for (const food of foods) {
        const div = document.createElement('div');
        div.classList = 'foodCard'
        div.innerHTML = `
        <img src='${food.strMealThumb}'>
            <h2>${food.strTags}</h2>
            <button>ODER</button>
        `;
        foodSection2.appendChild(div)
    }
}
food();
