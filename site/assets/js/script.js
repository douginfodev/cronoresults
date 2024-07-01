let filters = document.querySelectorAll(".filterDiv");
let numberPosition = document.querySelectorAll(".section-results-card-position");
let categories; 
categories = document.querySelectorAll(".spancategory");

let totalRecords = filters.length;
filterSelection('ED');

//***** Select Category *****
function filterDropDown() {
    let category = document.getElementById('selectcategory');
    filterSelection(category.value);
}

//***** Filters Selection *****
function filterSelection(category) {
    let position = 1;

    for(let index = 0;index < totalRecords;index++){
      if ((category != categories[index].innerHTML) && (category != 'ED')) {
        filters[index].style.display = 'none';
      }else{    
        filters[index].style.display = 'flex';
        numberPosition[index].innerHTML = '<h1>'+position+'</h1>';
        position += 1;
      }  
    }
}