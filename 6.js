// ## 💻 Exercises:Day 6

// ### Exercises: Level 1

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
// for (let i = 0; i < 11; i++) {
//   console.log(i);
// }
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// let j= 0;
// do{
//   console.log(j);
//   j++;
// }while (j <= 10)

// 4. Write a loop that makes the following pattern using console.log():

//    ```js
//        #
//        ##
//        ###
//        ####
//        #####
//        ######
//        #######
//    ```

// 5. Use loop to print the following pattern:

for (let i = 0; i < 11; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

// 6. Using loop print the following pattern
for (let i = 0; i < 11; i++) {
  console.log(`${i} x ${i * i} = ${i * i * i}`);
}

// 7. Use for loop to iterate from 0 to 100 and print only even numbers
for (let index = 0; index <= 100; index++) {
  if (index % 2 == 0) {
    console.log(index);
  }
}
// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
for (let index = 0; index <= 100; index++) {
  if (index % 2 != 0) {
    console.log(index);
  }
}
// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.

//     ```sh
//     The sum of all numbers from 0 to 100 is 5050.
//     ```
let sum = 0;
for (let index = 0; index <= 100; index++) {
  sum = sum + index;
}
console.log(sum);
// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let odd = 0;
let even = 0;
for (let index = 0; index <= 100; index++) {
  if (index % 2 != 0) {
    odd = odd + index;
  } else {
    even = even + index;
  }
}
console.log(even);

console.log(odd);

//     ```sh
//     The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
//     ```

// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let numArray = new Array();
numArray.push(odd);
numArray.push(even);
console.log(numArray);
//     ```sh
//       [2550, 2500]
//     ```

// 13. Develop a small script which generate array of 5 random numbers
let randomArray = new Array();
for (let i = 1; i <= 5; i++) {
  randomArray.push(Math.floor(Math.random() * 10));
}
console.log(randomArray);
// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
let uniqArray = new Array();
let ii = 0;
while (ii < 5) {
  function random() {
    return Math.ceil(Math.random() * 10);
  }
  let randomNumber = random();
  if (uniqArray.includes(randomNumber)) {
    random();
  } else {
    uniqArray.push(randomNumber);
    ii++;
  }
}
console.log(uniqArray + " Unique");
// 15. Develop a small script which generate a six characters random id:

//     ```sh
//     5j2khz
//     ```

// ### Exercises: Level 2

// 1. Develop a small script which generate any number of characters random id:

//     ```sh
//       fe3jo1gl124g
//     ```

//     ```sh
//       xkqci4utda1lmbelpkm03rba
//     ```

// 1. Write a script which generates a random hexadecimal number.

//     ```sh
//     '#ee33df'
//     ```

// 1. Write a script which generates a random rgb color number.

//     ```sh
//     rgb(240,180,80)
//     ```

// 1. Using the above countries array, create the following new array.

//     ```sh
//     ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
//     ```

// 1. Using the above countries array, create an array for countries length'.

//     ```sh
//     [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
//     ```

// 1. Use the countries array to create the following array of arrays:

//     ```sh
//       [
//       ['Albania', 'ALB', 7],
//       ['Bolivia', 'BOL', 7],
//       ['Canada', 'CAN', 6],
//       ['Denmark', 'DEN', 7],
//       ['Ethiopia', 'ETH', 8],
//       ['Finland', 'FIN', 7],
//       ['Germany', 'GER', 7],
//       ['Hungary', 'HUN', 7],
//       ['Ireland', 'IRE', 7],
//       ['Iceland', 'ICE', 7],
//       ['Japan', 'JAP', 5],
//       ['Kenya', 'KEN', 5]
//     ]
//     ```

// 2. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

//     ```sh
//     ['Finland','Ireland', 'Iceland']
//     ```

// 3. In above countries array, check if there is  a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

//     ```sh
//     ['Albania', 'Bolivia','Ethiopia']
//     ```

// 4. Using the above countries array, find the country containing the biggest number of characters.

//       ```sh
//       Ethiopia
//       ```

// 5. Using the above countries array, find the country containing only 5 characters.

//     ```sh
//     ['Japan', 'Kenya']
//     ```

// 6. Find the longest word in the webTechs array
// 7. Use the webTechs array to create the following array of arrays:

//     ```sh
//     [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
//     ```

// 8. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
// 9. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
// 10. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
// 11. Print all the elements of array as shown below.

//     ```js
//       const fullStack = [
//         ['HTML', 'CSS', 'JS', 'React'],
//         ['Node', 'Express', 'MongoDB']
//       ]
//     ````

//     ```sh
//       HTML
//       CSS
//       JS
//       REACT
//       NODE
//       EXPRESS
//       MONGODB
//     ```

// ### Exercises: Level 3

// 1. Copy countries array(Avoid mutation)
// 1. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
// 1. Sort the webTechs array and mernStack array
// 1. Extract all the countries contain the word 'land' from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) and print it as array
// 1. Find the country containing the hightest number of characters in the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
// 1. Extract all the countries contain the word 'land' from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) and print it as array
// 1. Extract all the countries containing only four characters from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) and print it as array
// 1. Extract all the countries containing two or more words from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) and print it as array
// 1. Reverse the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) and capitalize each country and stored it as an array

// 🎉 CONGRATULATIONS ! 🎉
