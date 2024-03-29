// ## 💻 Exercises

// ### Exercises: Level 1

// 1. Create an empty object called dog
const dog = new Object();
// 2. Print the the dog object on the console
console.log(dog);
// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return _woof woof_
dog.name = "dog";
dog.legs = 4;
dog.color = "caramelo";
dog.age = 8;
dog.bark = () => {
  console.log("Au au au");
};
dog.bark();
// 4. Get name, legs, color, age and bark value from the dog object
dog.getName = function () {
  console.log(this.name);
};
dog.getName();

// 5. Set new properties the dog object: breed, getDogInfo
dog.breed = "Vira Lata";
dog.getDogInfo = function () {
  console.log(
    this.name,
    this.breed,
    this.age,
    this.bark(),
    this.legs,
    this.color
  );
};

dog.getDogInfo();
// ### Exercises: Level 2

// 1. Find the person who has many skills in the users object.
// 1. Count logged in users, count users having greater than equal to 50 points from the following object.

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

let count = 0;
for (const [key, value] of Object.entries(users)) {
  console.log(`${key}: ${value.points}`);
  if (value.points >= 50) {
    count = count + 1;
  }
  console.log(count);
}

// 1. Find people who are MERN stack developer from the users object
console.log(dog.hasOwnProperty("dog"));
const MERN = users.Alex.skills.includes(Object.entries(users.Alex));
console.log(MERN);
// 1. Set your name in the users object without modifying the original users object
users.Guilherme = {};
console.log(users);
// 1. Get all keys or properties of users object
console.log(Object.keys(users));
// 1. Get all the values of users object
console.log(Object.values(users));
// 1. Use the countries object to print a country name, capital, populations and languages.
console.log(Object.values(users["Guilherme"]));

// ### Exercises: Level 3

// 1. Create an object literal called _personAccount_. It has _firstName, lastName, incomes, expenses_ properties and it has _totalIncome, totalExpense, accountInfo,addIncome, addExpense_ and _accountBalance_ methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
  firstName: "",
  lastName: "",
  incomes: [],
  expenses: [],
  totalIncome: 0,
  totalExpense: 0,
  accountInfo: function () {
    console.log(this.firstName, this.lastName, this.totalIncome, this.totalExpense);
  },
  addIncome: function (income, description) {
    this.incomes.push({
      income: income,
      description: description,
    });
    this.totalIncome = this.totalIncome + income;
  },
  addExpense: function (expense, description) {
    this.expenses.push({
      expense: expense,
      description: description,
    });
    this.totalExpense = this.totalExpense + expense;
  },
  accountBalance: function () {
    console.log(this.totalIncome - this.totalExpense);
  },
}




// 2. **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()

//   ```js
//       const users = [
//       {
//           _id: 'ab12ex',
//           username: 'Alex',
//           email: 'alex@alex.com',
//           password: '123123',
//           createdAt:'08/01/2020 9:00 AM',
//           isLoggedIn: false
//       },
//       {
//           _id: 'fg12cy',
//           username: 'Asab',
//           email: 'asab@asab.com',
//           password: '123456',
//           createdAt:'08/01/2020 9:30 AM',
//           isLoggedIn: true
//       },
//       {
//           _id: 'zwf8md',
//           username: 'Brook',
//           email: 'brook@brook.com',
//           password: '123111',
//           createdAt:'08/01/2020 9:45 AM',
//           isLoggedIn: true
//       },
//       {
//           _id: 'eefamr',
//           username: 'Martha',
//           email: 'martha@martha.com',
//           password: '123222',
//           createdAt:'08/01/2020 9:50 AM',
//           isLoggedIn: false
//       },
//       {
//           _id: 'ghderc',
//           username: 'Thomas',
//           email: 'thomas@thomas.com',
//           password: '123333',
//           createdAt:'08/01/2020 10:00 AM',
//           isLoggedIn: false
//       }
//       ];

//       const products = [
//     {
//       _id: 'eedfcf',
//       name: 'mobile phone',
//       description: 'Huawei Honor',
//       price: 200,
//       ratings: [
//         { userId: 'fg12cy', rate: 5 },
//         { userId: 'zwf8md', rate: 4.5 }
//       ],
//       likes: []
//     },
//     {
//       _id: 'aegfal',
//       name: 'Laptop',
//       description: 'MacPro: System Darwin',
//       price: 2500,
//       ratings: [],
//       likes: ['fg12cy']
//     },
//     {
//       _id: 'hedfcg',
//       name: 'TV',
//       description: 'Smart TV:Procaster',
//       price: 400,
//       ratings: [{ userId: 'fg12cy', rate: 5 }],
//       likes: ['fg12cy']
//     }
//   ]
//   ```

//   Imagine you are getting the above users collection from a MongoDB database.
//     a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
//     b. Create a function called signIn which allows user to sign in to the application

// 3. The products array has three elements and each of them has six properties.
//     a. Create a function called rateProduct which rates the product
//     b. Create a function called averageRating which calculate the average rating of a product

// 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

// 🎉 CONGRATULATIONS ! 🎉

// [<< Day 7](../07_Day_Functions/07_day_functions.md) | [Day 9 >>](../09_Day_Higher_order_functions/09_day_higher_order_functions.md)
