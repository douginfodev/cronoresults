let filters = document.querySelectorAll(".filterDiv");
let numberPosition = document.querySelectorAll(".section-results-card-position");
let categories; 
categories = document.querySelectorAll(".spancategory");
let categoriapontos; 
categoriapontos = document.querySelectorAll("#spanpontoscat");
let geralpontos;
console.log(categoriapontos);
geralpontos = document.querySelectorAll("#spanpontosger");

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
       // geralpontos[index].display = 'flex';
      }else{    
        filters[index].style.display = 'flex';
       // categoriapontos[index].style.display = 'flex';
       // geralpontos[index].display = 'none';
        numberPosition[index].innerHTML = '<h1>'+position+'</h1>';
        position += 1;
      }  
    }
}