// 1. Create an arrow function called square that takes a number as an argument and returns its square. Use
// the arrow function to calculate the square of a given number and display the result.

const square = (number) => number * number;

// Example usage:
const inputNumber = 5;
const result = square(inputNumber);
console.log(`The square of ${inputNumber} is: ${result}`);



// 2. The following is an array of 10 students ages:
// =» const ages [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age.
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array
ages.sort((a, b) => a - b);

// Find the min and max age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Find the median age
const middleIndex = Math.floor(ages.length / 2);
const medianAge = ages.length % 2 === 0
  ? (ages[middleIndex - 1] + ages[middleIndex]) / 2
  : ages[middleIndex];

// Find the average age
const sumAges = ages.reduce((sum, age) => sum + age, 0);
const averageAge = sumAges / ages.length;

// Find the range of ages
const rangeOfAges = maxAge - minAge;

// Compare (min - average) and (max - average)
const minDifference = Math.abs(minAge - averageAge);
const maxDifference = Math.abs(maxAge - averageAge);

// Display the results
console.log("Sorted Ages:", ages);
console.log("Min Age:", minAge);
console.log("Max Age:", maxAge);
console.log("Median Age:", medianAge);
console.log("Average Age:", averageAge);
console.log("Range of Ages:", rangeOfAges);
console.log("Absolute Difference (min - average):", minDifference);
console.log("Absolute Difference (max - average):", maxDifference);


// 3. Createa Map to store contact information (name, age, email, location) and implement a function to
// retrieve contact details by name.

// Create a Map to store contact information
const contactMap = new Map();

// Function to add contact details to the map
const addContact = (name, age, email, location) => {
  contactMap.set(name, { age, email, location });
};

// Function to retrieve contact details by name
const getContactDetails = (name) => {
  return contactMap.get(name);
};

// Example: Adding contacts
addContact("John Doe", 30, "john@example.com", "New York");
addContact("Jane Smith", 25, "jane@example.com", "San Francisco");

// Example: Retrieving contact details by name
const contact1Details = getContactDetails("John Doe");
const contact2Details = getContactDetails("Jane Smith");

// Displaying contact details
console.log("Contact 1 Details:", contact1Details);
console.log("Contact 2 Details:", contact2Details);


// 4. Create two objects personl and person2 with properties namne and age. Createa function "introduce" that
// prints "Hello, I'm [name], and I'm [age] years old." Use the call method to make person2 introduce itself
// using the introduce function.

// Create person1 object
const person1 = {
    name: "Rahul",
    age: 30
  };
  
  // Create person2 object
  const person2 = {
    name: "Amit",
    age: 25
  };
  
  // Define the introduce function
  function introduce() {
    console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
  }
  
  // Call the introduce function for person1
  introduce.call(person1);
  
  // Call the introduce function for person2 using call method
  introduce.call(person2);
  

// 5. You are developing a program to manage a list of unique items. Write a Javascript program that uses a
// Set to store a collection of unique numbers. Use the Map object to associate each number with its square.
// Finally, print both the unique numbers and their corresponding squares.

// Create a Set to store unique numbers
const uniqueNumbers = new Set([1, 2, 3, 4, 5]);

// Create a Map to associate each number with its square
const numberSquareMap = new Map();

// Populate the Map with number-square pairs
uniqueNumbers.forEach(number => {
  const square = number * number;
  numberSquareMap.set(number, square);
});

// Print unique numbers and their corresponding squares
console.log("Unique Numbers:", Array.from(uniqueNumbers));
console.log("Number-Square Map:");

numberSquareMap.forEach((square, number) => {
  console.log(`${number} => ${square}`);
});


// 6. Create a simple JavaScript function named displaylnfo that takes two parameters (name and role) and
// logs a message.
// Use call to invoke the displaylnfo function with specific arguments.
// • Use apply to invoke the displayinfo function with arguments passed as an array.
// Create another function named greet that logsagreeting with this context.
// • Use bind to create a new function boundGreet with a specific context and log the greeting.

// Create a function named displayInfo
function displayInfo(name, role) {
    console.log(`Name: ${name}, Role: ${role}`);
  }
  
  // Use call to invoke displayInfo with specific arguments
  displayInfo.call(null, "Rahul", "Developer");
  
  // Use apply to invoke displayInfo with arguments passed as an array
  const infoArray = ["Mintu", "Designer"];
  displayInfo.apply(null, infoArray);
  
  // Create a function named greet
  function greet() {
    console.log(`Hello, ${this.name}!`);
  }
  
  // Use bind to create a new function boundGreet with a specific context
  const boundGreet = greet.bind({ name: "Amit" });
  
  // Log the greeting using the boundGreet function
  boundGreet();
  

// 7. TaskS:
// Create an object named calculator with methods add, subtract, and multiply.
// • Implement the calculate method in the calculator object, which takes an operation ('add, 'subtract, or
// 'multiply) and two numbers.
// Use call to perform an addition operation using the calculate method.
// • Use apply to perform a multiplication operation using the calculate method with arguments as an array.
// Create another object named discountCalculator with a discount percentage property and a method
// applyDiscount.
// Use bind to createa new function calculateDiscount that is bound to the discountCalculator object and
// can be reused.

// Create a calculator object
const calculator = {
    add: function (a, b) {
      return a + b;
    },
    subtract: function (a, b) {
      return a - b;
    },
    multiply: function (a, b) {
      return a * b;
    },
    calculate: function (operation, num1, num2) {
      if (operation === 'add') {
        return this.add(num1, num2);
      } else if (operation === 'subtract') {
        return this.subtract(num1, num2);
      } else if (operation === 'multiply') {
        return this.multiply(num1, num2);
      } else {
        return NaN;
      }
    }
  };
  
  // Use call to perform an addition operation using calculate method
  const additionResult = calculator.calculate.call(calculator, 'add', 5, 3);
  console.log("Addition Result:", additionResult);
  
  // Use apply to perform a multiplication operation using calculate method with arguments as an array
  const multiplicationResult = calculator.calculate.apply(calculator, ['multiply', 4, 6]);
  console.log("Multiplication Result:", multiplicationResult);
  
  // Create a discountCalculator object
  const discountCalculator = {
    discountPercentage: 10,
    applyDiscount: function (amount) {
      const discountAmount = (this.discountPercentage / 100) * amount;
      return amount - discountAmount;
    }
  };
  
  // Use bind to create a new function calculateDiscount bound to discountCalculator
  const calculateDiscount = calculator.calculate.bind(discountCalculator, 'subtract');
  const discountedAmount = calculateDiscount(100);
  console.log("Discounted Amount:", discountedAmount);
  