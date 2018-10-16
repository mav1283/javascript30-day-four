import _ from 'lodash';

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }
]

const people = [
    'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddos, Mick',
    'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Helaire',
    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas',
    'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving',
    'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin',
    'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
    'Birrell, Agustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'
]

/*  Array.prototype.filter()
    1. Filter the list of inventors for those who were born in the 1500's
*/

const fifteen = inventors.filter((inventor)=>{
    if(inventor.year >= 1500 && inventor.year <= 1600){
        return true; // keep it.
    }
});

/* or this syntax: 
const fifteen = inventors.filter((inventor => inventor.year >= 1500 && inventor.year <= 1600)) */
console.log(fifteen);
console.table(fifteen);

/*  Array.prototype.map()
    2. Give us an array of the inventory first and last names.
*/

const fullNames = inventors.map( inventor => `${inventor.first} ${inventor.last}` );
console.log(fullNames);

/*  Array.prototype.sort()
    3. Sort the inventors by birthdate, oldest to youngest.
*/

const ordered = inventors.sort(function(a,b){
    if( a.year > b.year ){
        return 1;
    } else {
        return -1;
    }
})

/* or this syntax:
    const ordered = inventors.sort((a,b)=> a.year > b.year? 1 : -1 ) */;
console.log(ordered);

/*  Array.prototype.reduce()
    4. How many years did all the inventors live?
*/

/*  Array.prototype.sort()
    5. Sort the inventors by years lived.
*/

/*  
    6. Create a list of Boulevards in Paris that contains 'de' anywhere in the name
    https://en.wikipedia.org/wiki/Category:Boulevards in Paris
*/

/*  Array.prototype.sort()
    7. Sort the people alphabetically by last name.
*/

/*  Array.prototype.reduce()
    8. Reduce Exercise
*/