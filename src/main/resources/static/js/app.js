const BASE_API = 'http://localhost:8080/beerings'
document.addEventListener('DOMContentLoaded', () =>{

    document.getElementById('food_input').addEventListener('click', function(){
        this.value = '';
    });
    document.getElementById('food_submit').addEventListener('click', getPairings);
});

function getPairings(){
    var foods = document.getElementById('food_input').value;
    console.log(foods)
    var splitFoods = foods.split(" ");
    fetch(BASE_API + '/food?foods=' + splitFoods.join("_"))
       .then(response => response.json())
       .then(data => {

       })
//       .then(data => console.log(data));

}