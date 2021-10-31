console.log('Challenge 1!');
// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// Test Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// Test Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

// starting for Test Data 1:-
let weightOfMark = 78;
let heightOfMark = 1.69;
let weightOfJohn = 92;
let heightOfJohn = 1.95;

// calculation of BMI :

let BMIOfMark = weightOfMark / heightOfMark ** 2;
let BMIOfJohn = weightOfJohn / heightOfJohn ** 2;

// boolean result : 

let markHigherBMI = BMIOfMark > BMIOfJohn;

// displaying all 

console.log(BMIOfMark);
console.log(BMIOfJohn);
console.log(markHigherBMI);



// starting for Test Data 2:-
let newweightOfMark = 95;
let newheightOfMark = 1.88;
let newweightOfJohn = 85;
let newheightOfJohn = 1.76;

// calculation of BMI :

let newBMIOfMark = newweightOfMark / newheightOfMark ** 2;
let newBMIOfJohn = newweightOfJohn / newheightOfJohn ** 2;

// boolean result : 

let newmarkHigherBMI = newBMIOfMark > newBMIOfJohn;

// displaying all 

console.log(newBMIOfMark);
console.log(newBMIOfJohn);
console.log(newmarkHigherBMI);

// both test cases are working
// coding challenge 1 completed!!


// -----------------------------challenge 2 --------------------------------------------
// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉

console.log('-----------challenge 2-----------------');
if(newBMIOfMark > newBMIOfJohn) {
    console.log('Mark\'s BMI is higher than John\'s!');
    console.log(`Mark's BMI (${newBMIOfMark}) is higher than John's (${newBMIOfJohn})!`);
} else{
    console.log('John\'s BMI is higher than Mark\'s!');
    console.log(`John's BMI (${newBMIOfJohn}) is higher than Mark's (${newBMIOfMark})!`);
}


// coding challenge 2 completed!!

// -----------------------------challenge 3 --------------------------------------------

// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// Test Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// Test Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// Test Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK
console.log('-----------challenge 3-----------------');
let avgOfDolphins = (96 + 108 + 89) / 3;
let avgOfKoalas = (88 + 91 + 110) / 3;

if (avgOfDolphins > avgOfKoalas && avgOfDolphins >= 100) {
    console.log('Congratulations!! Dolphins win the trophy');
} else if (avgOfKoalas > avgOfDolphins && avgOfKoalas >= 100) {
    console.log('Congratulations!! Koalas win the trophy');
} else if(avgOfDolphins === avgOfKoalas && avgOfDolphins >=100 && avgOfKoalas >=100) {
    console.log('Congratulations!! Both Dolphins and Koalas win the trophy');
}else {
    console.log('Sorry!!No teams win trophy');
}


// coding challenge 3 completed!!

// -----------------------------challenge 4 --------------------------------------------

// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// Test Data 1: Test for bill values 275, 40 and 430
// Hints:
// Test To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// Test Value X is between 50 and 300, if it's >= 50 && <= 300 😉
// GOOD LUCK 😀

console.log('-----------challenge 4-----------------');
let bill = 40;
let tip = (bill >= 50 && bill <= 200) ? (bill * 0.15) : (bill * 0.2);
console.log(`
Your bill amount is: ${bill}
Tip you have to give: ${tip}
total payment: ${bill + tip}
`);

// coding challenge 4 completed!!

console.log('-----------------------------');



