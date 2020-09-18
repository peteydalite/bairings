const date = Date.now();

document.addEventListener('DOMContentLoaded', () =>{

    const sub = document.getElementById('age_submit');
    sub.addEventListener('click', checkAge);

    const input = document.getElementById('birthDate');
    input.addEventListener('keyup', function(event){
            if(event.keyCode === 13){
                event.preventDefault();
                sub.click();
            };
        });
    
});

function checkAge(){
    var dateEntered = document.getElementById('birthDate').value;
    console.log(dateEntered);
    var bDay = new Date(dateEntered);
    var currentDay = new Date(date);
    // To calculate the time difference of two dates
    var Difference_In_Time = currentDay.getTime() - bDay.getTime();

    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    var Difference_in_Years = Difference_In_Days / 365;
     console.log(Difference_in_Years);

    if(Difference_in_Years>= 21){
        location.href = "index";
    }else{
        alert("Sorry you are too young to enter the webpage!")
    };
};