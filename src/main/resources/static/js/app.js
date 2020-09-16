const BASE_API = 'http://localhost:8080/beerings'
const sugs = document.getElementById('suggestions');
document.addEventListener('DOMContentLoaded', () =>{

    document.getElementById('food_input').addEventListener('click', function(){
        this.value = '';
    });
    document.getElementById('food_submit').addEventListener('click', getPairings);
});

function getPairings(){
    let foods = document.getElementById('food_input').value;
    console.log(foods)
    let splitFoods = foods.split(" ");
    fetch(BASE_API + '/food?foods=' + splitFoods.join("_"))
       .then(response => response.json())
       .then(data => {
        data.array.forEach(element => {
            
        });
        


       })
    //   .then(data => console.log(data));

}