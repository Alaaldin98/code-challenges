'use strict';

// Important Note: 
// Kindly use reduce instead of for in all of your solutions

// Resource:
// Reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
// 
// Given an array of objects, count the objects by using reduce method.

// Input:
// var voters = [
//     {
//         voter_Name: "Adam Scott",
//         votes_To: "James",
//     },
//     {
//         voter_Name: "Abril Blake",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Ruby Andrews",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     }
// ]
//
// Output: 5


const objectCounter = (obj) => obj.reduce((Conter, currentValue) => Conter += 1, 0)
    // write your code here



// const objectCounter = (obj) => {
//     const count = obj.reduce((counter) => {
//     counter += 1;
//         return counter;
// }
// // objectCounter(voters);
// >>>>>>> main
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
// 
// Given a string input as an argument reverse it using reduce method.
//
// Input: 'you shall not pass' 
// Output: 'pass not shall you'
//
// Hint:
// since you need to reverse words, you may get some use of the methods
// you learnt before to split the string to words
//
// ------------------------

// <<<<<<< exercise13
const stringReverse = str => str.split(" ").reduce((a, b) => [b].concat(a), []).join(" ")
    // write your code here


// =======
// const stringReverse = (str) => {
//     return str.split('').reduce((reversed, words) => words + reversed,"" )
// }
// >>>>>>> main
// // -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
// 
// Using the same array of objects from the first question, create new object that contains the candidates names as keys (voting for),
// and how many times they got voted to as values using the reduce method.
//
// Input:
// let voters = [
//     {
//         voter_Name: "Adam Scott",
//         votes_To: "James",
//     },
//     {
//         voter_Name: "Abril Blake",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Ruby Andrews",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     }
// ];
//
// Output:
// let res = {
//     James: 1,
//     Jade: 2,
//     Bailey: 2
// };
//

// <<<<<<< exercise13
const statistics = (obj) => { return obj.reduce(function(r, a) { r[a.votes_To] = (r[a.votes_To] || 0) + 1; return r; }, {}); }

    // write your code here

=======
// const statistics = (obj) => {
//     // write your code here
// }
// >>>>>>> main
// -------------------------------------------------------------------------------------------------------


module.exports = { objectCounter, stringReverse, statistics };