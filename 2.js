// 1. Declare a variable named challenge and assign it to an initial value **'30 Days Of JavaScript'**.
let challenge = "30 Days Of JavaScript";
// 2. Print the string on the browser console using __console.log()__
console.log(challenge);
// 3. Print the __length__ of the string on the browser console using _console.log()_
console.log(challenge.length);
// 4. Change all the string characters to capital letters using __toUpperCase()__ method
function print(str) {
  console.log(str);
}
print(challenge.toUpperCase());
// 5. Change all the string characters to lowercase letters using __toLowerCase()__ method
print(challenge.toLowerCase());
// 6. Cut (slice) out the first word of the string using __substr()__ or __substring()__ method
print(challenge.substr(0, 2));
// 7. Slice out the phrase *Days Of JavaScript* from *30 Days Of JavaScript*.
print(challenge.substring(2, challenge.length));
// 8. Check if the string contains a word __Script__ using __includes()__ method
print(challenge.includes("Script")); //true
// 9. Split the __string__ into an __array__ using __split()__ method
print(challenge.split(""));
// 10. Split the string 30 Days Of JavaScript at the space using __split()__ method
print(challenge.split(" "));
// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' __split__ the string at the comma and change it to an array.
let bigTechs = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
print(bigTechs.split(", "));
// 12. Change 30 Days Of JavaScript to 30 Days Of Python using __replace()__ method.
print(challenge.replace("JavaScript", `Python`));
print(challenge);
// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use __charAt()__ method.
print(challenge.charAt(15)); //S
// 14. What is the character code of J in '30 Days Of JavaScript' string using __charCodeAt()__
print(challenge.charCodeAt(11)); //
print(challenge.charAt(11));
// 15. Use __indexOf__ to determine the position of the first occurrence of __a__ in 30 Days Of JavaScript
print(challenge.indexOf("a"));
// 16. Use __lastIndexOf__ to determine the position of the last occurrence of __a__ in 30 Days Of JavaScript.
print(challenge.lastIndexOf("a"));
// 17. Use __indexOf__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
let sentence =
  "You cannot end a sentence with because because because is a conjunction";
print(sentence.indexOf("because"));
// 18. Use __lastIndexOf__ to find the position of the last occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
print(sentence.lastIndexOf("because"));
// 19. Use __search__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
print(sentence.search("because"));
// 20. Use __trim()__ to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let spaces = " 30 days of JavaScript ";
print(spaces.trim());
// 21. Use __startsWith()__ method with the string *30 Days Of JavaScript* and make the result true
print(challenge.startsWith("30")); //true
print(challenge.startsWith(30)); //true

// 22. Use __endsWith()__ method with the string *30 Days Of JavaScript* and make the result true
print(challenge.endsWith("t")); //true
print(challenge.endsWith("pt")); //true
print(challenge.endsWith(" pt")); //false
print(challenge.endsWith("JavaScript")); //true
// 23. Use __match()__ method to find all the __a__’s in 30 Days Of JavaScript
print(challenge.match(/a/g));
// 24. Use __concat()__ and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
print("30 Days of ".concat("JavaScript"));
// 25. Use __repeat()__ method to print 30 Days Of JavaScript 2 times
print(challenge.repeat(2));

// ### Exercise: Level 2

// 1. Using console.log() print out the following statement:

//     ```sh
//     The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
//     ```

print(
  "There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
// 2. Using console.log() print out the following quote by Mother Teresa:

//     ```sh
let qtu = `Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.`;
//     ```
print(qtu);
// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let ten = "10";
if (typeof ten === 10) {
  print(qtu);
} else {
  let inter = parseInt(ten);
  print(inter);
  print(ten);
}
// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
if (parseFloat("9.8") === 10) {
  print("ParseFloat 9.8 is equal to 10");
} else {
  let nine = 9.8;
  let ten = Math.ceil(nine);
  print(ten === 10);
}
// 5. Check if 'on' is found in both python and jargon
if ("Python".includes("oln") && "jargon".includes("on")) {
  print("YES!!!");
} else {
  print("NO :{");
}
// 6. _I hope this course is not full of jargon_. Check if _jargon_ is in the sentence.
let sentence2 = "I hope this course is not full of jargon_";
print(sentence2.includes("_jargon_"));

// 7. Generate a random number between 0 and 100 inclusively.
print(Math.ceil(Math.random() * 100));
// 8. Generate a random number between 50 and 100 inclusively.
print(Math.ceil(Math.random() * (100 - 50) + 50));
// 9. Generate a random number between 0 and 255 inclusively.
print(Math.ceil(Math.random() * 255));
// 10. Access the 'JavaScript' string characters using a random number.
let java = "javaScript";
let index = Math.floor(Math.random() * java.length);
print(java[index]);
// 11. Use console.log() and escape characters to print the following pattern.

//     ```js
//     1 1 1 1 1
//     2 1 2 4 8
//     3 1 3 9 27
//     4 1 4 16 64
//     5 1 5 25 125
//     ```
print(
  `\t js \n 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27 \n 4 1 4 16 64 \n 5 1 5 25 125 \n`
);
// 12.  Use __substr__ to slice out the phrase __because because because__ from the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
let sentence3 =
  "You cannot end a sentence with because because because is a conjunction";
print(sentence3.indexOf("be"));
print(sentence3.lastIndexOf("because"));
print(sentence3.substr(31, 24));

// ### Exercises: Level 3

// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word __love__ in this sentence.
let sentence4 =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
print(sentence4.match(/love/gi).length);
// 2. Use __match()__ to count the number of all __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
let sentence5 =
  "You cannot end a sentence with because because because is a conjunction";
print(sentence5.match(/because/g));
// 3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).

const sentence6 =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let clean = sentence6.replace(/[@%$#;&!,]/gi, "");
print(clean);

// 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let sentece7 =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let senteceArray = sentece7.split(" ");
let num = senteceArray.filter((element) => {
  return parseInt(element);
});
let int = num.map((element) => {
  return parseInt(element);
});
let total = 0;
for (let index = 0; index < int.length; index++) {
  total += int[index];
  print(typeof int[index]);
}
print(total);
