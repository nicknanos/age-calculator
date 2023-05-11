//DOM selectors

//input
const day_input = document.querySelector('#day');
const month_input = document.querySelector('#month');
const  year_input = document.querySelector('#year');

const all_input = document.querySelectorAll('[required]');
//resutl
const day_result = document.querySelector('#day-result');
const month_result = document.querySelector('#month-result');
const  year_result = document.querySelector('#year-result');

//error
const day_error = document.querySelector('#day+.error');
const month_error = document.querySelector('#month+.error');
const year_error = document.querySelector('#year+.error');

const form = document.querySelector('#date-form');

const cButton = document.querySelector('.calculate');

const today = new Date();

let valid = false;

let animation;

//local varibles
let day;
let month;
let year;


cButton.addEventListener('click',()=>{
    all_input.forEach((data)=>{
        if(!data.checkValidity()) valid = false;
    });
    if(valid) calculateAge();
})

day_input.addEventListener('input',(e)=>{
    e.target.classList.add('touched');
    day = e.target.value;
    checkValidity(e);
})

month_input.addEventListener('input',(e)=>{
    e.target.classList.add('touched');
    month = e.target.value;
    checkValidity(e);
})

year_input.addEventListener('input',(e)=>{
    e.target.classList.add('touched');
    year = e.target.value;
    checkValidity(e);
})


form.addEventListener('submit',(e)=>e.preventDefault());

function calculateAge(){
    let birthday = new Date(year,month-1,day);
    let diff = Math.round((today.getTime() - birthday.getTime())/(1000*60*60*24));
    
    const age_year = Math.round(diff/365);
    
    birthday = new Date(today.getFullYear(),month-1,day);
    diff = Math.round((today.getTime() - birthday.getTime())/(1000*60*60*24));

    let age_month = Math.round(diff/30);
    
    if (today.getDate() < birthday.getDate()) age_month--;

    const age_day = diff%30

    month_result.textContent = age_month;
    day_result.textContent = age_day;
    
    year_result.textContent = '0';
    if (!animation){
        animation = setInterval(animateAge,40,age_year,year_result);
    }

}

function getMonthDay(){
    let monthInt = parseInt(month);
    if (monthInt == 2) return 28;
    if (monthInt%2 == 0){
        return 30;
    } else return 31;
}

function checkMonth(){
    return (parseInt(month)>getMonthDay() ? false : true);
}

function isEmpty(target){
    return(target.value=='' ? true : false);
}

function checkValidity(e){
    e.preventDefault();
    let target = e.target.id;
    if(e.target.checkValidity() && checkMonth()){
            getErrorBox(target).textContent = '';
            valid = true;
    }else {
            if(isEmpty(e.target)){
                getErrorBox(target).textContent = '*This field is required'
            }else{
                getErrorBox(target).textContent= `*Invalid ${target}`;
            }
            valid =false;
    }
    
}

function getErrorBox(target){
    switch(target){
        case 'day':
            return day_error;
        case 'month':
            return month_error;
        case 'year':
            return year_error;
    } 
}

function animateAge(age,result){
    let dayInt = parseInt(result.textContent);
    if(dayInt<age){
        result.textContent = dayInt + 1;
    }else {
        clearInterval(animation);
        animation = null;
    }
    console.log('test')
}