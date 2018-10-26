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

const people = [
    'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddos, Mick',
    'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Helaire',
    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas',
    'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving',
    'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin',
    'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
    'Birrell, Agustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'
]

//const inventors = [];
const inventorList = document.getElementById('inventors');
const peopleList = document.getElementById('people');
const boulevardList = document.getElementById('deboulevards');
const selectInputs = document.querySelectorAll('.selectinput');
// const selectScientist = document.querySelector('select[name="selectScientist"]');
// const selectPeople = document.querySelector('select[name="selectPeople"]');

// document.addEventListener('DOMContentLoaded',function() {
    selectInputs.forEach((sinput)=>{
        sinput.onchange = handleSelect;
    });
// },false);
// document.addEventListener('DOMContentLoaded',function(){
//     selectScientist.onchange = handleSelect;
//     selectPeople.onchange = handleSelect;
// }, false);


function handleSelect(){
    
    console.log(this.value);

}



function render(){
    
    // inventors.forEach((inventor)=>{
    //     const li = document.createElement('li');
    //     const lihead = document.createElement('h5');
    //     const libody = document.createElement('p');
    //     const age = inventor.passed - inventor.year;
    //     lihead.innerHTML = `${inventor.first} ${inventor.last}, ${age}`;
    //     libody.innerHTML = `${inventor.year} - ${inventor.passed}`;
    //     li.appendChild(lihead);
    //     li.appendChild(libody);
    //     inventorList.appendChild(li);
    // });

    // people.forEach((name)=>{
    //     const li = document.createElement('li');
    //     const lihead = document.createElement('h5');
    //     const nameArr = name.split(', ');
    //     const fullname = `${nameArr[1]} ${nameArr[0]}`;
    //     lihead.innerHTML = fullname;
    //     li.appendChild(lihead);
    //     peopleList.appendChild(li);
    // });

    // axios.get('https://res.cloudinary.com/dzsmdyknz/raw/upload/v1540349778/GitHub/Javascript30/day-4/apis/inventors.json')
    //   .then(function (response) {
    //       const inventors = response.data.inventors;
    //       console.log(inventors);
    //       inventors.map((inventor)=>{
    //             const li = document.createElement('li');
    //             const lihead = document.createElement('h5');
    //             const libody = document.createElement('p');
    //             const age = inventor.passed - inventor.year;
    //             lihead.innerHTML = `${inventor.first} ${inventor.last}, ${age}`;
    //             libody.innerHTML = `${inventor.year} - ${inventor.passed}`;
    //             li.appendChild(lihead);
    //             li.appendChild(libody);
    //             inventorList.appendChild(li);
    //         });
       
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // always executed
    //   });

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const inventors = JSON.parse(this.responseText);
            console.log(inventors.inventors);
            inventors.inventors.map((inventor)=>{
                const li = document.createElement('li');
                const lihead = document.createElement('h5');
                const libody = document.createElement('p');
                const age = inventor.passed - inventor.year;
                lihead.innerHTML = `${inventor.first} ${inventor.last}`;
                libody.innerHTML = `${inventor.year} - ${inventor.passed}`;
                li.appendChild(lihead);
                li.appendChild(libody);
                inventorList.appendChild(li);
            });
        }
    };
    xhttp.open("GET", "https://res.cloudinary.com/dzsmdyknz/raw/upload/v1540349778/GitHub/Javascript30/day-4/apis/inventors.json", true);
    xhttp.send();
    
    axios.get('https://res.cloudinary.com/dzsmdyknz/raw/upload/v1540364041/GitHub/Javascript30/day-4/apis/people.json')
      .then(function (response) {
          const people = response.data.people;
          console.log(people);
          people.map((name)=>{
            const li = document.createElement('li');
            const lihead = document.createElement('h5');
            const nameArr = name.split(', ');
            const fullname = `${nameArr[1]} ${nameArr[0]}`;
            lihead.innerHTML = fullname;
            li.appendChild(lihead);
            peopleList.appendChild(li);
        });
       
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });

      
      const bhttp = new XMLHttpRequest();
    bhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const boulevards = JSON.parse(this.responseText);
            console.log(boulevards.boulevards);
            boulevards.boulevards.map((boulevard)=>{
                const li = document.createElement('li');
                const lihead = document.createElement('h5');
                lihead.innerHTML = `${boulevard}`;
                li.appendChild(lihead);
                boulevardList.appendChild(li);
            });
        }
    };
    bhttp.open("GET", "https://res.cloudinary.com/dzsmdyknz/raw/upload/v1540456404/GitHub/Javascript30/day-4/apis/parisdeboulevard.json", true);
    bhttp.send();
    //   
}

render();

// function sortInventors(category){
//     inventors.sort((prev, curr) => prev.category > curr.category? 1 : -1);
// }

// function sortPeople(category){
//     people.sort((a, b) => a.category > b.category? 1 : -1);
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