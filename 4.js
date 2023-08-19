// ## 💻 Exercises

// ### Exercises: Level 1

// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to  wait for the number of years he needs to turn 18.
// let age = prompt("Please enter your age");
// if (age > 18) {
//   alert("You can drive");
// } else {
//   alert("sorry you can't drive");
// }

//    ```sh
//    Enter your age: 30
//    You are old enough to drive.

//    Enter your age:15
//    You are left with 3 years to drive.
//    ```

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// let yourAge = prompt("Enter your age");
// let myAge = 30;
// if (myAge > yourAge) {
//   alert("I'm older than you");
// } else alert("You are older than me");

//    ```sh
//    Enter your age: 30
//    You are 5 years older than me.
//    ```

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

//     - using if else
//     - ternary operator.

let a = 4;
let b = 3;
a > b ? console.log("a is greater") : console.log("b is greater");
//     ```

//     ```sh
//       4 is greater than 3
//     ```

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = prompt("please enter a number");
number % 2 == 0
  ? console.log(`${number} is an even number`)
  : console.log(number + " is an odd number ");
//     ```sh
//     Enter a number: 2
//     2 is an even number

//     Enter a number: 9
//     9 is is an odd number.
//     ```

// ### Exercises: Level 2

// 1. Write a code which  can give grades to students according to theirs scores:
//    - 80-100, A
//    - 70-89, B
//    - 60-69, C
//    - 50-59, D
//    - 0-49, F
// 1. Check if the season is Autumn, Winter, Spring or Summer.
//    If the user input is :
//    - September, October or November, the season is Autumn.
//    - December, January or February, the season is Winter.
//    - March, April or May, the season is Spring
//    - June, July or August, the season is Summer
// 1. Check if a day is weekend day or a working day. Your script will take day as an input.

// ```sh
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.
//   ```

// ### Exercises: Level 3

// 1. Write a program which tells the number of days in a month.

//   ```sh
//     Enter a month: January
//     January has 31 days.

//     Enter a month: JANUARY
//     January has 31 day

//     Enter a month: February
//     February has 28 days.

//     Enter a month: FEbruary
//     February has 28 days.
//   ```

// 1. Write a program which tells the number of days in a month, now consider leap year.

// 🎉 CONGRATULATIONS ! 🎉
