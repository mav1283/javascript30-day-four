import _ from 'lodash';
import '../scss/styles.scss';
import axios from 'axios';

// const inventors = [
//     { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
//     { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//     { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//     { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
//     { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
//     { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }
// ]

// const people = [
//     'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddos, Mick',
//     'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Helaire',
//     'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas',
//     'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving',
//     'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin',
//     'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
//     'Birrell, Agustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'
// ]


const inventorList = document.getElementById('inventors');
const peopleList = document.getElementById('people');
const boulevardList = document.getElementById('deboulevards');
const selectInputs = document.querySelectorAll('.selectinput');
const selectInventors = document.querySelector('select[name="selectInventors"]');
const selectPeople = document.querySelector('select[name="selectPeople"]');
const textboxFilter = document.querySelector('.textinput');



// document.addEventListener('DOMContentLoaded',function() {
//     selectInputs.forEach((sinput)=>{
//         sinput.onchange = handleSelect;
//     });
// },false);
// function handleSelect(){
//     console.log(this.value);
// }

let inventors;
let people;
let boulevards;

window.addEventListener('load',render);


function render(){
    /* Load Defaults */
    const inventorsHttp = new XMLHttpRequest();
    inventorsHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            inventors = JSON.parse(this.responseText);
            renderInventorList(inventors);
        }
    };
    inventorsHttp.open("GET", "https://res.cloudinary.com/dzsmdyknz/raw/upload/v1540540687/GitHub/Javascript30/day-4/apis/inventors.json", true);
    inventorsHttp.send();
    
    axios.get('https://res.cloudinary.com/dzsmdyknz/raw/upload/v1540540543/GitHub/Javascript30/day-4/apis/people.json')
      .then(function (response) {
          let peepArr = response.data;
          people = peepArr.map((person)=>person.split(', '));
          renderPeopleList(people);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });

      
    const boulevardsHttp = new XMLHttpRequest();
    boulevardsHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            boulevards = JSON.parse(this.responseText);
            renderBoulevardList(boulevards);
        }
    };
    boulevardsHttp.open("GET", "https://res.cloudinary.com/dzsmdyknz/raw/upload/v1540540744/GitHub/Javascript30/day-4/apis/parisdeboulevard.json", true);
    boulevardsHttp.send();
    //   
}

selectInventors.onchange = function(){
    let newArr;
    if(this.value == 'age'){        
        newArr = Object.assign([], inventors.sort((prev, curr) => (prev.year - prev.passed) > (curr.year - curr.passed)? 1 : -1));
        clearList(inventorList);
        renderInventorList(newArr);
        console.table(newArr);
    } else if(this.value == 'name'){
        function compare(a,b) {
            if(`${a.first} ${a.last}` < `${b.first} ${b.last}`)
              return -1;
            if(`${a.first} ${a.last}` > `${b.first} ${b.last}`)
              return 1;
            return 0;
          }
        newArr = Object.assign([], inventors.sort(compare));
        clearList(inventorList);
        renderInventorList(newArr);
        console.table(newArr);
    } else if(this.value == 'born'){        
        newArr = Object.assign([], inventors.sort((prev, curr) => prev.year > curr.year? 1 : -1));
        clearList(inventorList);
        renderInventorList(newArr);
        console.table(newArr);
    } else if(this.value == 'died'){        
        newArr = Object.assign([], inventors.sort((prev, curr) => prev.passed > curr.passed? 1 : -1));
        clearList(inventorList);
        renderInventorList(newArr);
        console.table(newArr);
    }
};

selectPeople.onchange = function(){
    let newArr;
    if(this.value == 'firstname'){        
        newArr = Object.assign([], people.sort((a,b)=> a[1] < b[1] ? -1 : 1 ));
        clearList(peopleList);
        renderPeopleList(newArr);
        console.table(newArr);
    } else if(this.value == 'lastname'){
        newArr = Object.assign([], people.sort((a,b)=> a[0] < b[0] ? -1 : 1 ));
        clearList(peopleList);
        renderPeopleList(newArr);
        console.table(newArr);
    } 
};

function handleInputChange(event){
    let newArr;
    console.log(event.target.value);
    newArr = Object.assign([], boulevards.filter((word)=>word.includes(event.target.value)));
    clearList(boulevardList);
    renderBoulevardList(newArr);
    console.table(newArr);
};

['click','change', 'keydown', 'paste', 'input', 'propertychange', 'keyup', 'blur',].forEach( evt => 
    textboxFilter.addEventListener(evt, handleInputChange, false)
);

function clearList(arrlist){
    while(arrlist.firstChild) {
        arrlist.firstChild.remove();
    }
}

function renderInventorList(arr){
    arr.map((inventor)=>{
        const li = document.createElement('li');
        const lihead = document.createElement('h5');
        const libody = document.createElement('p');
        const lifoot = document.createElement('p');
        const age = inventor.passed - inventor.year;
        lihead.innerHTML = `${inventor.first} ${inventor.last}`;
        libody.innerHTML = `${inventor.year} - ${inventor.passed}`;
        lifoot.innerHTML = `Age: ${age}`
        li.appendChild(lihead);
        li.appendChild(libody);
        li.appendChild(lifoot);
        inventorList.appendChild(li);
    });
}

function renderPeopleList(arr){
    arr.map((person)=>{
        const li = document.createElement('li');
        const lihead = document.createElement('h5');
        //const nameArr = person.split(', ');
        const fullname = `${person[1]} ${person[0]}`;
        lihead.innerHTML = fullname;
        li.appendChild(lihead);
        peopleList.appendChild(li);
    });
}

function renderBoulevardList(arr){
    arr.map((boulevard)=>{
        const li = document.createElement('li');
        const lihead = document.createElement('h5');
        lihead.innerHTML = `${boulevard}`;
        li.appendChild(lihead);
        boulevardList.appendChild(li);
    });
}

// function sortInventors(arr,event){
//     // if(this.value == 'age'){
//     //     arr.sort((prev, curr) => prev.year > curr.year? 1 : -1);
//     // }
//     console.log(`${arr} ${event.target.value}`);
// }

// function sortPeople(category,arr){
//     arr.sort((a, b) => a.category > b.category? 1 : -1);
// }

// function sortPeople(category,arr){
//     arr.sort((a, b) => a.category > b.category? 1 : -1);
// }

// function filterInventors(category){

// }

// function filterPeople(category){

// }

/* Array Functions */
/*  Array.prototype.filter()
    1. Filter the list of inventors for those who were born in the 1500's
*/

// const fifteen = inventors.filter((inventor)=>{
//     if(inventor.year >= 1500 && inventor.year <= 1600){
//         return true; // keep it.
//     }
// });

/* or this syntax: 
const fifteen = inventors.filter((inventor => inventor.year >= 1500 && inventor.year <= 1600)) */
//console.log(fifteen);
//console.table(fifteen);

/*  Array.prototype.map()
    2. Give us an array of the inventory first and last names.
*/

// const fullNames = inventors.map( inventor => `${inventor.first} ${inventor.last}` );
//console.log(fullNames);

/*  Array.prototype.sort()
    3. Sort the inventors by birthdate, oldest to youngest.
*/

// const ordered = inventors.sort(function(a,b){
//     if( a.year > b.year ){
//         return 1;
//     } else {
//         return -1;
//     }
// })

/* or this syntax:
    const ordered = inventors.sort((a,b)=> a.year > b.year? 1 : -1 ) */;
//console.log(ordered);

/*  Array.prototype.reduce()
    4. How many years did all the inventors live?
*/

/*  Array.prototype.sort()
    5. Sort the inventors by years lived.
*/

/*  
    6. Create a list of Boulevards in Paris that contains 'de' anywhere in the name
    https://en.wikipedia.org/wiki/Category:Boulevards in Paris

    const category = document.querySelector('.mw-category');
    const links = Array.from(document.querySelectorAll('a')); // or [...document.querySelectorAll('a')];
    const de = links
                .map(link=>link.textContent)
                .filter(streetName => streetName.include('de'));
*/



/*  Array.prototype.sort()
    7. Sort the people alphabetically by last name.
*/

/*  Array.prototype.reduce()
    8. Reduce Exercise
*/