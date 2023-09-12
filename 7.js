// ## 💻 Exercises

// ### Exercises: Level 1

// 1. Declare a function _fullName_ and it print out your full name.
function fullName(name) {
  console.log(name);
}
fullName("Guilherme dos Santos");
// 2. Declare a function _fullName_ and now it takes firstName, lastName as a parameter and it returns your full - name.
function _fullName(firstName, lastName) {
  return firstName + lastName;
}
console.log(_fullName("Guilherme", " Santos"));

// 3. Declare a function _addNumbers_ and it takes two two parameters and it returns sum.
function _addNumbers_(a, b) {
  return a + b;
}
console.log(_addNumbers_(1, 2));
// 4. An area of a rectangle is calculated as follows: _area = length x width_. Write a function which calculates _areaOfRectangle_.
function _areaOfRectangle_(height, width) {
  return height * width;
}
console.log(_areaOfRectangle_(2, 2));
// 5. A perimeter of a rectangle is calculated as follows: _perimeter= 2x(length + width)_. Write a function which calculates _perimeterOfRectangle_.
function _perimeterOfRectangle_(width, height) {
  return 2 * width + 2 * height;
}
console.log(_perimeterOfRectangle_(2, 2));
// 6. A volume of a rectangular prism is calculated as follows: _volume = length x width x height_. Write a function which calculates _volumeOfRectPrism_.
function _volumeOfRectPrism_(width, height, length) {
  return width * height * length;
}
console.log(_volumeOfRectPrism_(2, 2, 2));
// 7. Area of a circle is calculated as follows: _area = π x r x r_. Write a function which calculates _areaOfCircle_
function _areaOfCircle_(r) {
  return Math.round(Math.PI * r * r);
}
console.log(_areaOfCircle_(3));

// 8. Circumference of a circle is calculated as follows: _circumference = 2πr_. Write a function which calculates _circumOfCircle_
function _circumOfCircle_(r) {
  return Math.round(2 * r * Math.PI);
}
console.log(_circumOfCircle_(3));
// 9. Density of a substance is calculated as follows:_density= mass/volume_. Write a function which calculates _density_.
function _density_(mass, volume) {
  return mass / volume;
}
console.log(_density_(100, 28));
// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, _speed_.
function _speed_(distance, time) {
  return distance / time;
}
console.log("Speed " + _speed_(1000, 60));
// 11. Weight of a substance is calculated as follows: _weight = mass x gravity_. Write a function which calculates _weight_.
function _weight_(mass, gravity) {
  return mass * gravity;
}
console.log("Weight " + _weight_(50, 10));
// 12. Temperature in oC can be converted to oF using this formula: _oF = (oC x 9/5) + 32_. Write a function which convert oC to oF _convertCelsiusToFahrenheit_.
function _convertCelsiusToFahrenheit_(celsius) {
  return celsius * (9 / 5) + 32;
}
console.log(
  `0 Celsius is equal to ` + _convertCelsiusToFahrenheit_(0) + " Fahrenheit"
);
// 13. Body mass index(BMI) is calculated as follows: _bmi = weight in Kg / (height x height) in m2_. Write a function which calculates _bmi_. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is _underweight, normal, overweight_ or _obese_ based the information given below.
function BMI(weight, height) {
  let bmi = weight / (height * height);
  switch (true) {
    case bmi > 30:
      console.log(bmi + " Your are obese");
      break;
    case bmi > 25:
      console.log(bmi + " Overweight");
      break;
    case bmi > 18.5:
      console.log(bmi + " Normal weight");
      break;

    default:
      console.log(bmi + " Underweight");
      break;
  }
}
BMI(70, 1.7);

//     - The same groups apply to both men and women.
//     - _Underweight_: BMI is less than 18.5
//     - _Normal weight_: BMI is 18.5 to 24.9
//     - _Overweight_: BMI is 25 to 29.9
//     - _Obese_: BMI is 30 or more

// 14. Write a function called _checkSeason_, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function _checkSeason_(month) {
  switch (true) {
    case month == "december" ||
      month == "january" ||
      month == "february" ||
      month == "march":
      console.log("Winter");
      break;
    default:
      console.log("Spring");
  }
}
_checkSeason_("februa");
// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(a, b, c) {
  return Math.max(a, b, c);
}
console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2))

// ### Exercises: Level 2

// 1. Linear equation is calculated as follows: _ax + by + c = 0_. Write a function which calculates value of a linear equation, _solveLinEquation_.
 
// 2. Quadratic equation is calculated as follows: _ax2 + bx + c = 0_. Write a function which calculates value or values of a quadratic equation, _solveQuadEquation_.
const solveQuadEquation = (a,b,c)=>{
  let delta = (b*b)-(4*a*c);
  console.log("Delta is: "+delta);
  let bhaskara;
  if (delta===0){
    bhaskara = -b/2*a;
    return bhaskara;
  }
}
console.log(solveQuadEquation(1,4,4))


//     ```js
//     console.log(solveQuadratic()) // {0}
//     console.log(solveQuadratic(1, 4, 4)) // {-2}
//     console.log(solveQuadratic(1, -1, -2)) // {2, -1}
//     console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
//     console.log(solveQuadratic(1, 0, -4)) //{2, -2}
//     console.log(solveQuadratic(1, -1, 0)) //{1, 0}
//     ```

// 3. Declare a function name _printArray_. It takes array as a parameter and it prints out each value of the array.
// 4. Write a function name _showDateTime_ which shows time in this format: 08/01/2020 04:08 using the Date object.

//     ```sh
//     showDateTime()
//     08/01/2020 04:08
//     ```

// 5. Declare a function name _swapValues_. This function swaps value of x to y.

//     ```js
//     swapValues(3, 4) // x => 4, y=>3
//     swapValues(4, 5) // x = 5, y = 4
//     ```

// 6. Declare a function name _reverseArray_. It takes array as a parameter and it returns the reverse of the array (don't use method).

//     ```js
//     console.log(reverseArray([1, 2, 3, 4, 5]))
//     //[5, 4, 3, 2, 1]
//     console.log(reverseArray(['A', 'B', 'C']))
//     //['C', 'B', 'A']
//     ```

// 7. Declare a function name _capitalizeArray_. It takes array as a parameter and it returns the - capitalizedarray.
// 8. Declare a function name _addItem_. It takes an item parameter and it returns an array after adding the item
// 9. Declare a function name _removeItem_. It takes an index parameter and it returns an array after removing an item
// 10. Declare a function name _sumOfNumbers_. It takes a number parameter and it adds all the numbers in that range.
// 11. Declare a function name _sumOfOdds_. It takes a number parameter and it adds all the odd numbers in that - range.
// 12. Declare a function name _sumOfEven_. It takes a number parameter and it adds all the even numbers in that - range.
// 13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

//     ```sh
//     evensAndOdds(100);
//     The number of odds are 50.
//     The number of evens are 51.
//     ```

// 14. Write a function which takes any number of arguments and return the sum of the arguments

//     ```js
//     sum(1, 2, 3) // -> 6
//     sum(1, 2, 3, 4) // -> 10
//     ```

// 15. Writ a function which generates a _randomUserIp_.
// 16. Write a function which generates a _randomMacAddress_
// 17. Declare a function name _randomHexaNumberGenerator_. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

//     ```sh
//     console.log(randomHexaNumberGenerator());
//     '#ee33df'
//     ```

// 18. Declare a function name _userIdGenerator_. When this function is called it generates seven character id. The function return the id.

//     ```sh
//     console.log(userIdGenerator());
//     41XTDbE
//     ```

// ### Exercises: Level 3

// 1. Modify the _userIdGenerator_ function. Declare a function name _userIdGeneratedByUser_. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

//     ```sh
//     userIdGeneratedByUser()
//     'kcsy2
//     SMFYb
//     bWmeq
//     ZXOYh
//     2Rgxf
//     '
//     userIdGeneratedByUser()
//     '1GCSgPLMaBAVQZ26
//     YD7eFwNQKNs7qXaT
//     ycArC5yrRupyG00S
//     UbGxOFI7UXSWAyKN
//     dIV0SSUTgAdKwStr
//     '
//     ```

// 1. Write a function name _rgbColorGenerator_ and it generates rgb colors.

//     ```sh
//     rgbColorGenerator()
//     rgb(125,244,255)
//     ```

// 1. Write a function **_arrayOfHexaColors_** which return any number of hexadecimal colors in an array.
// 1. Write a function **_arrayOfRgbColors_** which return any number of RGB colors in an array.
// 1. Write a function **_convertHexaToRgb_** which converts hexa color to rgb and it returns an rgb color.
// 1. Write a function **_convertRgbToHexa_** which converts rgb to hexa color and it returns an hexa color.
// 1. Write a function **_generateColors_** which can generate any number of hexa or rgb colors.

//     ```js
//     console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
//     console.log(generateColors('hexa', 1)) // '#b334ef'
//     console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
//     console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
//     ```

// 1. Call your function _shuffleArray_, it takes an array as a parameter and it returns a shuffled array
// 1. Call your function _factorial_, it takes a whole number as a parameter and it return a factorial of the number
// 1. Call your function _isEmpty_, it takes a parameter and it checks if it is empty or not
// 1. Call your function _sum_, it takes any number of arguments and it returns the sum.
// 1. Write a function called _sumOfArrayItems_, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
// 1. Write a function called _average_, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
// 1. Write a function called _modifyArray_ takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

//     ```js
//     console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
//     ```

//     ```sh
//     ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
//     ```

//     ```js
//     console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
//     ```

//     ```sh
//     ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
//     ```

//     ```js
//     console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
//     ```

//     ```sh
//       'Not Found'
//     ```

// 1. Write a function called _isPrime_, which checks if a number is prime number.
// 1. Write a functions which checks if all items are unique in the array.
// 1. Write a function which checks if all the items of the array are the same data type.
// 1. JavaScript variable name does not support special characters or symbols except \$ or \_. Write a function **isValidVariable** which check if a variable is valid or invalid variable.
// 1. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

//     ```js
//     sevenRandomNumbers()
//     [(1, 4, 5, 7, 9, 8, 0)]
//     ```

// 1. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

// 🎉 CONGRATULATIONS ! 🎉

// [<< Day 6](../06_Day_Loops/06_day_loops.md) | [Day 8 >>](../08_Day_Objects/08_day_objects.md)
