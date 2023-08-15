// ## 💻 Day 3: Exercises

// ### Exercises: Level 1

// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
person = {
  firstName: "Guilherme",
  lastName: "dos Santos",
  age: 30,
  country: "USA",
  isMarried: true,
  city: "Avondale",
  year: new Date(),
};
let print = (print) => {
  console.log(print);
};
print(person.year.getFullYear());
// 2. Check if type of '10' is equal to 10
typeof 10 === typeof "10"
  ? print("They are the same")
  : print("They are different");
// 3. Check if parseInt('9.8') is equal to 10
parseInt("9.8") === 10
  ? print("they are the same")
  : print("they are different");
// 4. Boolean value is either true or false.
//    1. Write three JavaScript statement which provide truthy value.
let two = "something";
let three = 15;
if (true && two && three) {
  print("they are all truthy!");
} else {
  print("they are all falsy!");
}
//    2. Write three JavaScript statement which provide falsy value.
two = "";
three = 0;
if (false && two && three) {
  print("they are all truthy!");
} else {
  print("they are all falsy!");
}

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//    1. 4 > 3 true
print(4 > 3);
//    2. 4 >= 3 true
print(4 >= 3);
//    3. 4 < 3 false
print(4 < 3);
//    4. 4 <= 3 false
print(4 <= 3);
//    5. 4 == 4 true
print(4 == 4);
//    6. 4 === 4 true
print(4 === 4);
//    7. 4 != 4 false
print(4 != 4);
//    8. 4 !== 4 false
print(4 !== 4);
//    9. 4 != '4' false
print(4 != "4");
//    10. 4 == '4' true
print(4 == "4");
//    11. 4 === '4' false
print(4 === "4");
//    12. Find the length of python and jargon and make a falsy comparison statement.
!("python".length == "jargon".length)
  ? print("they have the same length")
  : print("they have the different length");

// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
//    1. 4 > 3 && 10 < 12 true
print(4 > 3 && 10 < 12);
//    2. 4 > 3 && 10 > 12 false
print(4 > 3 && 10 > 12);
//    3. 4 > 3 || 10 < 12 true
print(4 > 3 || 10 < 12);
//    4. 4 > 3 || 10 > 12 true
print(4 > 3 || 10 > 12);
//    5. !(4 > 3) false
print(!(4 > 3));
//    6. !(4 < 3) true
print(!(4 < 3));
//    7. !(false) true
print(!false);
//    8. !(4 > 3 && 10 < 12) false
print(!(4 > 3 && 10 < 12));
//    9. !(4 > 3 && 10 > 12) true
print(!(4 > 3 && 10 > 12));
//    10. !(4 === '4') true
print(!(4 === "4"));
//    11. There is no 'on' in both dragon and python false
!("dragon".includes("on") && "python".includes("on"))
  ? print("The estatment is true")
  : print("The estatement is false");

// 7. Use the Date object to do the following activities
//    1. What is the year today?
let date = new Date();
print(date.getFullYear());
//    2. What is the month today as a number?
print(date.getMonth());
switch (date.getMonth()) {
  case 7:
    print("August");
    break;
  default:
    print("Other");
}
//    3. What is the date today?
print(date.getDate());
//    4. What is the day today as a number?
print(date.getDay());
//    5. What is the hours now?
print(date.getHours());
//    6. What is the minutes now?
print(date.getMinutes());
//    7. Find out the numbers of seconds elapsed from January 1, 1970 to now.
print(date.getTime());

// ### Exercises: Level 2

// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

//    ```sh
//    Enter base: 20
//    Enter height: 10
//    The area of the triangle is 100
//    ```

// 1. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

//    ```sh
//    Enter side a: 5
//    Enter side b: 4
//    Enter side c: 3
//    The perimeter of the triangle is 12
//    ```

// 1. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// 1. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// 1. Calculate the slope, x-intercept and y-intercept of y = 2x -2
// 1. Slope is m = (y<sub>2</sub>-y<sub>1</sub>)/(x<sub>2</sub>-x<sub>1</sub>). Find the slope between point (2, 2) and point(6,10)
// 1. Compare the slope of above two questions.
// 1. Calculate the value of y (y = x<sup>2</sup> + 6x + 9). Try to use different x values and figure out at what x value y is 0.
// 1. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

//     ```sh
//     Enter hours: 40
//     Enter rate per hour: 28
//     Your weekly earning is 1120
//     ```

// 1. If the length of your name is greater than 7 say, your name is long else say your name is short.
// 1. Compare your first name length and your family name length and you should get this output.

//     ```js
//     let firstName = 'Asabeneh'
//     let lastName = 'Yetayeh'
//     ```

//     ```sh
//     Your first name, Asabeneh is longer than your family name, Yetayeh
//     ```

// 1. Declare two variables _myAge_ and _yourAge_ and assign them initial values and myAge and yourAge.

//    ```js
let myAge = 250;
let yourAge = 25;
//    ```
print(`I'm ${myAge - yourAge} older than you`);

// 1. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

//     ```sh
let bornYear = prompt("Enter they year you was born");
let atualYear = date.getFullYear();
console.log(atualYear);
if (atualYear - bornYear < 18) {
  alert(`I'm sorry you are ${atualYear - bornYear} years old, You can't drive`);
} else {
  alert(`Yes ! You are ${atualYear - bornYear} years old, you can drive `);
}

// 1. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let yearsLived = prompt("Enter number of years you lived: ");
let secondslived = yearsLived * 31536000;
console.log(`you lived ${secondslived} seconds`);

//    ```sh
//    Enter number of years you live: 100
//    You lived 3153600000 seconds.
//    ```

// 1. Create a human readable time format using the Date time object
//    1. YYYY-MM-DD HH:mm
//    2. DD-MM-YYYY HH:mm
//    3. DD/MM/YYYY HH:mm

// ### Exercises: Level 3

// 1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
//    1. YYY-MM-DD HH:mm eg. 20120-01-02 07:05
