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
let hashtag = "#";
console.log(hashtag);
for (let index = 0; index < 7; index++) {
  console.log(hashtag);
}

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

let randArr = new Array();
for (let index = 0; index <= 6; index++) {
  let randomCharacter = String.fromCharCode(Math.floor(Math.random() * 128));
  randArr.push(randomCharacter);
}
console.log(randArr.join(""));
//     ```sh
//     5j2khz
//     ```

// ### Exercises: Level 2

// 1. Using the above countries array, create the following new array.
let countriesUpper = countries.map((country) => country.toUpperCase());

console.log(countriesUpper);

//     ```sh
//     ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
//     ```

// 2. Using the above countries array, create an array for countries length'.
let countriesSizeArr = countriesUpper.map((country) => country.length);
console.log(countriesSizeArr);

//     ```sh
//     [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
//     ```

// 3. Use the countries array to create the following array of arrays:

const code = countries.map(function (element) {
  return [element, element.toUpperCase().slice(0, 3), element.length];
});

console.log(code);

// 4. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let land = new Array();
for (let country of countries) {
  if (country.includes("land")) {
    land.push(country);
  }
}
console.log(land);

// 5. In above countries array, check if there is  a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let ia = new Array();
for (let country of countries) {
  if (country.includes("ia")) {
    ia.push(country);
  } else {
    console.log(country);
  }
}
console.log(ia);

//     ```sh
//     ['Albania', 'Bolivia','Ethiopia']
//     ```

// 6. Using the above countries array, find the country containing the biggest number of characters.
let biggestCountry;
for (let i = 1; i < countries.length; i++) {
  if (countries[i].length > countries[i - 1].length) {
    biggestCountry = countries[i];
  }
}

//       ```sh
//       Ethiopia
//       ```
console.log(biggestCountry);

// 7. Using the above countries array, find the country containing only 5 characters.
let lengthFive = new Array();
for (const country of countries) {
  if (country.length == 5) {
    lengthFive.push(country);
  }
}
console.log(lengthFive);
//     ```sh
//     ['Japan', 'Kenya']
//     ```

// 8. Find the longest word in the webTechs array
let webTechsLength = 0;
for (let index = 0; index < webTechs.length; index++) {
  if (webTechs[index].length > webTechsLength) {
    webTechsLength = webTechs[index].length;
  }
}
console.log(webTechsLength);
// 9. Use the webTechs array to create the following array of arrays:
let webTechsArr = webTechs.map((element) => [element, element.length]);
console.log(webTechsArr);

//     ```sh
//     [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
//     ```

// 10. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let mern = mernStack.map((element) => element.slice(0, 1));
console.log(mern.join(""));
// 11. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
for (const web of webTechs) {
  console.log(web);
}
// 10. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruitArray = ["banana", "orange", "mango", "lemon"];
let reverseFruit = new Array();
for (let i = fruitArray.length - 1; i >= 0; i--) {
  console.log(i);
  reverseFruit.push(fruitArray[i]);
}
console.log(reverseFruit);

// ### Exercises: Level 3

// 1. Copy countries array(Avoid mutation)
let countries2 = [...countries];
console.log(countries2);
// 2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
let sortedCountries = countries2.sort();
console.log(sortedCountries);
// 3. Sort the webTechs array and mernStack array
let WebMern = webTechs.concat(mernStack).sort();
console.log(WebMern);

// 4. Extract all the countries containing only four characters from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) and print it as array
const countries3 = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]
let four = [];
countries3.forEach((element) => {
  if (element.length == 4) {
    four.push(element);
  }
});
console.log(four+" countries with length = 4");
// 5. Extract all the countries containing two or more words from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) and print it as array
let twoWords = [];
countries3.forEach((element) => {
  if (element.includes(" ")) {
    twoWords.push(element);
  }
});
console.log(twoWords+" countries with two words");
// 6. Reverse the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) and capitalize each country and stored it as an array
let countCaptReverse = [];
countries3.forEach((element) => {
  countCaptReverse.push(element.toUpperCase())})
  console.log(countCaptReverse.reverse())
// 🎉 CONGRATULATIONS ! 🎉
