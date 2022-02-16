"use strict";

// Important:
// To solve these challenges you have use (for in ,for of) or (Object.keys ,Object.values, Object.entries )

// Resources:
// for in : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// for of : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:

// You are given an object that contains name and age of some customers
// Write a function that returns an array of strings that follow the below structure
//
// the string format is "Customer Name :*** *** , Age :**"

// Input:
// {
   
// }
//
// Output:
// ["Customer Name :Romio Joliat , Age :35", "Customer Name :Mario Ristrova , Age :39", ... ]

// const customerAndAge = (name , age) => {
  // "Romio Joliat": 35,
  // "Mario Ristrova": 39,
  // "Sofia firnando": 50,
//   // write your code here
// };
function format (CustomerName,Age){
  this.CustomerName = CustomerName;
  this.Age = Age;
console.log("Customer Name: " +format.CustomerName + ", Age : " +format.Age );
};
format("Romio Joliat", 35);
format("Mario Ristrova", 39);
format("Sofia firnando", 50);

// char** myFunction() {
//   char ** sub_str = malloc(10 * sizeof(char*));
//   for (int i =0 ; i < 10; ++i)
//       sub_str[i] = malloc(20 * sizeof(char));
//   /* Fill the sub_str strings */
//   return sub_str;
// }


// var person1 = {
//   namep: "Romio Joliat",
//   age: 35,
//   };

//   var person2 = {
//   namep: "Mario Ristrova",
//   age: 39,
//   };
//   var person3 = {
//     namep: "Sofia firnando",
//     age: 50,
//     };
//     console.log(" Name: " + person1(namep) + ", Age : " +person1(age) +" Name: " + person2(namep) + ", Age : " +person2(age) +" Name: " + person3(namep) + ", Age : " +person3(age)  );

// ------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02
// Required:
//
// Write a function that takes recipe info object and returns an array of recipe info as strings
// as in the example

// Input:
// let recipeInfo = {
//   name: "pizza",
//   ingredients: ["bread", "tomato", "chicken", "mayo"],
//   cookTime: "twoHours",
//   price: "25$",
// };
//
// Output:
// ["name: pizza", "ingredients: bread,tomato,chicken,mayo", "cookTime: twoHours", "price: 25$"]
//
// Note:
// You can solve this challenge by using Object.entries

function recipe (name,ingredients,cookTime,price){
  this.name = name;
  this.ingredients = ingredients;
  this.cookTime = cookTime;
  this.price = price;
console.log("name: " +recipe.name + ", ingredients: " +recipe.ingredients ["bread", "tomato", "chicken", "mayo"] + " cookTime: " + recipe.cookTime +" price: " + recipe.price);
};
recipe();
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:

// Write a function that takes an array of objects (courses) and returns object of 2 new arrays
// first one is containing the names of all of the courses in the data set.
// second one is containing the names of all the students

const courses = [
  {
    course: 'Java',
    Instructor: 'David',
    Students: ['Lincoln', 'Ruth', 'Briana', 'Suzy', 'Greta'],
    GroupName: 'Stars',
  },
  {
    course: 'JavaScript',
    Instructor: 'Van',
    Students: ['Alphonso', 'Daley', 'Dax', 'Karter', 'Jorja'],
    GroupName: 'Nerd-ware',
  },
  {
    course: 'Python',
    Instructor: 'Delaney',
    Students: ['Barney', 'Kalé', 'Alisha'],
    GroupName: 'Whats-Up',
  },
  {
    course: 'DotNet',
    Instructor: 'Keanna',
    Students: ['Oli', 'Gisselle', 'Pru'],
    GroupName: 'Lol',
  },
];

const getInfo = (arr) => {
  let coursesName = [];
  let studentsName = [];
  // write your code here

  return { coursesName, studentsName };
};
// -------------------------------------------------------------------------------------------------------

//  ------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:

// The Head manager wants to get more organized info about some students, he wants you to find the students from the courses dataset
// and return their info following the below structure
//
// Input: ['Kalé', 'Alisha','Alphonso', 'Briana']
// Output: 
// [
//   {
//     Student: 'Kalé',
//     course: 'Python'
//   },
//   ...
// ]

const getStudents = (arr) => {
  // write your code here
};
//  ------------------------------------------------------------------------------------------------------

module.exports = {
  customerAndAge,
  getEntries,
  courses,
  getInfo,
  getStudents,
};
