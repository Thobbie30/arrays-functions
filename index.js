// ASSIGNMENT 1
/** Mutating methods are ones that change the object after the method has been used.
 * it also means changing the array itself instead of returning a new array with the new changes 
 * while non-mutating methods do not change the object after the method has been used. it also means returning a whole new array which has all the changes 
 * Examples of mutating array methods are: array.push(), array.pop(), array.sort(), array.fill(), array.splice()
 * Examples of non-mutating array methods are: array.concat(), array.indexOf(), array.includes(), array.join(), array.slice()
 */

// ASSIGNMENT 2

let languages =  ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']
console.log(languages);
// OUTPUT: [ 'C#', 'JavaScript', 'Ruby', 'PHP', 'Python' ]

// ADDING 'KOTLIN' TO THE END OF THE ARRAY
languages.push('Kotlin');
console.log(languages);
// OUTPUT: [ 'C#', 'JavaScript', 'Ruby', 'PHP', 'Python', 'Kotlin' ]

// ADD 'JAVA' AFTER 'RUBY'
languages.splice(3, 0, 'Java');
console.log(languages);
// OUTPUT: [ 'C#', 'JavaScript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin' ]

// REMOVING THE FIRST ITEM IN THE ARRAY
languages.shift('C#');
console.log(languages);
// OUTPUT: [ 'JavaScript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin' ]

// ADDING 'SCALA' AND 'SWIFT' TO THE BEGINNING OF THE ARRAY
languages.unshift('Scala', 'Swift');
console.log(languages);
/* OUTPUT: [
  'Scala',      'Swift',
  'JavaScript', 'Ruby',
  'Java',       'PHP',
  'Python',     'Kotlin'
]*/ 

// REPALCING 'PHP' WITH 'GO' AND 'RUST'
languages.splice(languages.indexOf('PHP'), 1, 'Go', 'Rust');
console.log(languages);
/* OUTPUT: [
  'Scala',      'Swift',
  'JavaScript', 'Ruby',
  'Java',       'Go',
  'Rust',       'Python',
  'Kotlin'
]*/

// ASSIGNMENT 3
//What will be the value of fruit after calling the function changeFruit?

let fruit = ['apple', 'mango', 'banana'];
function changeFruit( fruit ) {
fruit[2] = "orange";
return fruit;
}
console.log(changeFruit( fruit ));
// OUTPUT: [ 'apple', 'mango', 'orange' ] 
/**This is because the changeFruit function takes in the array named fruit, and then changes the value of the third element 
 * (i.e., the element at index 2) of the input array to "orange". The function then returns the modified array.*/

// ASSIGNMENT 4

function findMax(arr) {
    let maxVal = arr[0];  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxVal) {
        maxVal = arr[i];
      }
    }
    return maxVal;
  }
  const myArray = [5, 2, 9, 1, 7];
  const maxNum = findMax(myArray);
  console.log(maxNum);  
  // OUTPUT: 9
   
// ASSIGNMENT 5

function valTimesIndex(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * i);
  }
  return result;
}
const myArrays = [1, 2, 3, 4, 5];
const resultArray = valTimesIndex(myArrays);
console.log(resultArray);  
// OUTPUT: [0, 2, 6, 12, 20]