const BASE_API = 'http://localhost:8080/beerings'
let beersArr = [];


document.addEventListener('DOMContentLoaded', () =>{

   const input = document.getElementById('food_input');
    input.addEventListener('click', function(){
        this.placeholder = '';
    });
    const sub = document.getElementById('food_submit');

    sub.addEventListener('click', getPairings);
    input.addEventListener('keyup', function(event){
        if(event.keyCode === 13){
            event.preventDefault();
            sub.click();
        };
    });

});

function getPairings(){

    let foods = document.getElementById('food_input').value;
    console.log(foods)
    let splitFoods = foods.split(" ");
    const main = document.getElementById('beer-container');
    refreshContent();

    fetch(BASE_API + '/food?foods=' + splitFoods.join("_"))
       .then(response => response.json())
       .then(data => {

           for(let i = 0; i < data.length; i++){
                const beer = document.createElement('div');
                beer.classList.add('beer-card') ;


                setName(beer, data[i].name);

                if(data[i].image_url != null){
                    setImage(beer, data[i].image_url);
                }else{
                    setImage(beer);
                }

               main.appendChild(beer);
           }

           setBeerListeners(data)
       });


}
/**
** Need to add an event listener for each beer card so on 'click' it will pop up the form with the beer info
**/
function setBeerListeners(jsonData){
//    const beers = document.querySelectorAll('.beer-card')
//    const form = document.querySelector('form');
//    const formItems = form.querySelectorAll('p');
//    const additionalPairs = document.getElementById('additional-foods');
//    console.log(jsonData);
//
//   beers.forEach(beer => {
//    beer.addEventListener('click', (event) => {
//        if(form.classList.contains('display-setting')){
//            form.classList.remove('display-setting')
//
//            formItems.forEach(tag => {
//                if(tag.id === 'name'){
//                    tag.innerText =  jsonData.name;
//                }else if(tag.id === 'description'){
//                    tag.innerText = jsonData.description;
//                }else if(tag.id === 'abv'){
//                    tag.innerText = jsonData.abv;
//                }
//            });
//
//            let foods = jsonData.food_pairing;
//            foods.forEach(food =>{
//                const newLi = document.createElement('li');
//                newLi.innerText = food;
//
//                additionalPairs.appendChild(newLi);
//            })
//        }
//
//    })
//
//   });


}
function setImage(parent, url){
    const image = document.createElement('img');
    image.src = url;
    image.alt = 'N/A'
    parent.appendChild(image);
}
function setName(parent, name){
    const beerName = document.createElement('H3');
    beerName.innerText = name;
    parent.appendChild(beerName);
}
function refreshContent(){
    const beers = document.querySelectorAll('.beer-card');
    for(let i = 0; i < beers.length; i++){
        beers[i].remove();
    }
}