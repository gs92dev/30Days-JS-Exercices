// ### Exercise: Level 1
// 1. Declare an _empty_ array;
let array = new Array;
// 2. Declare an array with more than 5 number of elements
let array2 = ["a", "b", "c", "d", "e", "f"];
// 3. Find the length of your array
function print(a) {
  console.log(a);
}
print(array2.length);
// 4. Get the first item, the middle item and the last item of the array
print(array2[0]);
print(array2[array2.length / 2]);
print(array2[array2.length - 1]);
// 5. Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should  be greater than 5
let mixedDataTypes = ["a", 1, 0.5, "guilherme",36,"foo",58];
print(mixedDataTypes.length);
// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// 7. Print the array using _console.log()_
print(itCompanies.length);
// 8. Print the number of companies in the array
print(itCompanies);
print(itCompanies.length-1);

// 11. Change each company name  to uppercase one by one and print them out
let it = itCompanies.map(elem=>elem.toUpperCase())
print(it)

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
print(itCompanies.toString())
// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_
itCompanies.includes("F")?print("Google"):print("_not found_")
// 14. Filter out companies which have more than one 'o' without the filter method
// 15. Sort the array using _sort()_ method
print(itCompanies.sort())
// 16. Reverse the array using _reverse()_ method
print(itCompanies.reverse())
// 17. Slice out the first 3 companies from the array
print(itCompanies.slice(0, 3))
// 18. Slice out the last 3 companies from the array
print(itCompanies.slice(itCompanies.length -4,itCompanies.length-1))
// 20. Remove the first IT company from the array
let itC= itCompanies.shift()
print(itC)
// 21. Remove the middle IT company or companies from the array
// 22. Remove the last IT company from the array
// 23. Remove all IT companies

// ### Exercise: Level 2

// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
// 1. First remove all the punctuations and change the string to array and count the number of words in the array

//     ```js
//     let text =
//     'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
//     console.log(words)
//     console.log(words.length)
//     ```

//     ```sh
//     ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

//     13
//     ```

// 1. In the following shopping cart add, remove, edit items

//     ```js
//     const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     ```

//    - add 'Meat' in the beginning of your shopping cart if it has not been already added
//    - add Sugar at the end of you shopping cart if it has not been already added
//    - remove 'Honey' if you are allergic to honey
//    - modify Tea to 'Green Tea'
// 1. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// 1. In the webTechs array check if Sass exists in the array  and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
// 1. Concatenate the following two variables and store it in a fullStack variable.

//     ```js
//     const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
//     const backEnd = ['Node','Express', 'MongoDB']

//     console.log(fullStack)
//     ```

//     ```sh
//     ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
//     ```

// ### Exercise: Level 3

// 1. The following is an array of 10 students ages:

//     ```js
//     const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     ```

//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use _abs()_ method
// 1.Slice the first ten countries from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
// 1. Find the middle country(ies) in the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
// 2. Divide the countries array into two equal arrays if it is even.  If countries array is not even , one more country for the first half.

// 🎉 CONGRATULATIONS ! 🎉
