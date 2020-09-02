const date = Date.now();

document.addEventListener('DOMContentLoaded', () =>{

    document.getElementById('age_submit').addEventListener('click', checkAge);
    
    
});

function checkAge(){
    var dateEntered = document.getElementById('birthDate');
    var bDay = new Date(dateEntered);
    var currentDay = new Date(date);
    
    if(currentDay.getFullYear - bDay.getFullYear >= 21){
        location.href = "www.google.com";
    };
};