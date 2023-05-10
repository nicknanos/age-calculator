//DOM selectors

//input
const day_input = document.querySelector('#day');
const month_input = document.querySelector('#month');
const  year_input = document.querySelector('#year');

//resutl
const day_result = document.querySelector('#day-result');
const month_result = document.querySelector('#month-result');
const  year_result = document.querySelector('#year-result');

const cButton = document.querySelector('.calculate');

const today = new Date();

//local varibles
let day;
let month;
let year;


cButton.addEventListener('click',calculateAge)

day_input.addEventListener('input',(e)=>{
    day = e.target.value;
})

month_input.addEventListener('input',(e)=>{
    month = e.target.value;
})

year_input.addEventListener('input',(e)=>{
    year = e.target.value;
})


function calculateAge(){
    let birthday = new Date(year,month-1,day);
    let diff = Math.round((today.getTime() - birthday.getTime())/(1000*60*60*24));
    
    const age_year = Math.round(diff/365);
    
    birthday = new Date(today.getFullYear(),month-1,day);
    diff = Math.round((today.getTime() - birthday.getTime())/(1000*60*60*24));

    let age_month = Math.round(diff/30);
    
    if (today.getDate() < birthday.getDate()) age_month--;

    const age_day = diff%30

    day_result.textContent = age_day;
    month_result.textContent = age_month;
    year_result.textContent = age_year;
}