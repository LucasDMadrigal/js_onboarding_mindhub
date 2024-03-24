console.log("Starting javascript...");
/**
 * 
 * Difficulty Level: Low
 * 
 */

console.log("First Name:", myName);
console.log("Last Name:", myLastName);
console.log("Age:", myAge);

var fullName = myName + " " + myLastName;
var presentationText = "Hello, my name is " + fullName + ". I have a pet named " + myPet + " who is " + petAge + " years old.";

console.log(presentationText);


/**
 * 
 * Difficulty Level: Medium
 * 
 */

var sumAges = myAge + petAge;
var subtractAges = myAge - petAge;
var productAges = myAge * petAge;
var divisionAges = myAge / petAge;

console.log("Sum of ages:", sumAges);
console.log("Difference of ages:", subtractAges);
console.log("Product of ages:", productAges);
console.log("Division of ages:", divisionAges);

var student = {
  name: "John",
  age: 25,
  major: "Computer Science",
  GPA: 3.8,
  isGraduate: false
};

console.log("Student Object:");
console.table(student);

for (var property in student) {
  console.log(property + ": " + student[property]);
}

var pet = {
  name: "Buddy",
  species: "Dog",
  age: 5,
  color: "Brown",
  isFriendly: true
};

console.log("Pet Object:");
console.table(pet);

for (var property in pet) {
  console.log(property + ": " + pet[property]);
}

var fruits = ["Apple", "Banana", "Orange", "Grapes", "Strawberry"];

console.log("Fruits Array:");
console.log(fruits);

fruits.forEach(function(fruit, index) {
  console.log("Fruit " + (index + 1) + ": " + fruit);
});


/**
 * 
 * Difficulty Level: High
 * 
 */

var enteredAge = prompt("Please enter your age:");

var IamAdult = age >= 18;

console.log("I am an adult:", IamAdult);

var numbers = [1, 2, 3, 4, 5];

console.log("Numbers Array:");
console.log(numbers);

numbers.forEach(function(number, index) {
  console.log("Number " + (index + 1) + ": " + number);
});

var family = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 40 },
  { name: "Emily", age: 35 },
  { name: "David", age: 45 }
];

console.log("Family Array:");
console.table(family);

family.forEach(function(member, index) {
  console.log("Family Member " + (index + 1) + ": ", member);
});

var randomText = "I like " + fruits[1] + " and my lucky number is " + numbers[3] + ". " + family[4].name + " is a member of my family.";
console.log("Random Text:", randomText);
