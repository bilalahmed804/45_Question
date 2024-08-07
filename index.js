// //Q1
// let userName:string = "Bilal"
// console.log(userName);
// //Q2
// let personName = "BILAL";
// console.log(personName.toLowerCase());
// //Q3
// let personName1 = "bilal";
// console.log(personName1[0].toUpperCase() + personName1.slice(1));
// //Q4 
// let poetName = "Albert Einsteint"
// let quote = "A person who never mode a mistake never tried anything new.";
// console.log(`${poetName} once said, ${quote}`);
// //Q5
// let famous_person = "Albert Einsteint";
// let quote2 = "A person who never mode a mistake never tried anything new.";
// console.log(famous_person);
// console.log(quote2);
// //Q6
// let personName$ = "      Alon Musk          ";
// console.log(personName$);
// console.log(personName$.trim());
// //Q7
// console.log(4 + 12 - 8 * 1 / 1);
// //Q8
// let num1 = 5;
// console.log("num1=> " + num1);
// let num2 = 4;
// console.log("num2=> " + num2);
// let operator = num1 + num2 ;
// console.log("num1 + num2");
// console.log("result=> "+operator);
// //Q8
// let favoriteNumber = 2;
// let message = "My favorite Number is " + favoriteNumber;
// console.log(message);
// //Q9
// //this console is adding 2 number
// console.log(2+2);
// /*
// This console is subtraction 2 Number 
// */
// console.log(2-2);
// //Q9
// let arr = ["ather" , "sufyan" , "bilal"]
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// //Q10
// let arr$ = ["bilal" , "ather" , "sufyan"]
// let msg = "Hello!";
// console.log(`${msg} ${arr$[0]}`);
// console.log(`${msg} ${arr$[1]}`);
// console.log(`${msg} ${arr$[2]}`);
// //Q11
// let arr3 = ["CD125" , "bike" , "CD70"]
// console.log(`I wOuld like to own a ${arr3[0]} Motorcycle`);
// console.log(`I dislike ${arr3[1]} Motorcycle`);
// console.log(`${arr3[2]} love this Motorcycle`);
// //Q12
// let arr09 = ["ather" , "sufyan" , "bilal"]
// for(let i = 0 ; i < arr09.length ; i++){
//     console.log(`${arr09[i]} You are invited at dinner`);
// }
//Q13
// let arr08 = ["ather" , "sufyan" , "bilal"]
// arr08[1] = "muhammad"
// for(let i = 0 ; i < arr08.length ; i++){
//     console.log(`${arr08[i]} You are invited at lunch`);
// }
//Q14
// let arr08 = ["ather" , "sufyan" , "bilal"]
// arr08[1] = "muhammad"
// for(let i = 0 ; i < arr08.length ; i++){
//     console.log(`${arr08[i]} You are invited at lunch`);
// }
// //Q15
// let arr_$ = ["ather" , "sufyan" , "bilal"]
// arr_$[1] = "muhammad"
// arr_$.unshift("imran")
// arr_$.splice(arr_$.length/2,0,"hassan")
// arr_$.push("ather bahi")
// console.log(arr_$);
// for(let i = 0 ; i < arr_$.length ; i++){
//     console.log(`${arr_$[i]} You are invited at lunch`);
// }
// //Q17
// var array1 =['imran','ather', 'hassan', 'muhammad', 'bilal', 'faizan']
// for(var i = 5 ;i >= 2; i--){
//     console.log(`${array1[i]} sorry your invition is cancel`);
//     array1.pop()
// }
// console.log(`${array1[0]} you are invited`);
// console.log(`${array1[1]} you are invited`);
// //Q18
// let city = ["karach","lahore","islambad","hedrabad","sukare"]
// console.log(city);
// let cityInorder = city.sort()
// console.log(cityInorder , city);
// let cityInreverse = cityInorder.reverse()
// console.log(cityInreverse, city);
// let againReverse = cityInreverse.reverse()
// console.log(againReverse,city);
// let againsort = againReverse.sort()
// console.log(againsort);
// console.log(city);
// //Q19
// let person = ['imran','ather', 'hassan', 'muhammad', 'bilal', 'faizan']
// for(let i = 0 ; i < person.length ; i++){
//     console.log(`${person[i]} you are invited dinner`);
// }
// //Q20
// let city_1 = ["karach","lahore","islambad","hedrabad","sukare"]
// console.log(city_1);
// //Q24 Tests for equality and inequality with strings
// // Equality
// let string1 = "Hello";
// let string2 = "Hello";
// let testEqualTrue = string1 === string2; //true
// let testEqualFalse = string1 === "hello"; //false
// console.log(testEqualTrue);
// console.log(testEqualFalse);
// // InEquality
// let testInEqualTrue = string1 !== string2; //false
// let testInEqualFalse = string1 !== "hello"; //true
// console.log(testInEqualTrue);
// console.log(testInEqualFalse);
// // Equality with lower case 
// let string3 = "wOrld"
// let testLowerCaseTrue = string3.toLowerCase() === "world"; //true
// let testLowerCaseFalse = string3.toLowerCase() === "wOrld";//false
// console.log(testLowerCaseTrue);
// console.log(testLowerCaseFalse);
// //InEquality with lower case
// let testLowerCaseNotTrue = string3.toLowerCase() !== "world"; //false
// let testLowerCaseNotFalse = string3.toLowerCase() !== "wOrld";//true
// console.log(testLowerCaseNotTrue);
// console.log(testLowerCaseNotFalse);
// Numerical Tests Involving Equality and Inequality, Greater
//  Than and Less Than, Greater Than or Equal To, and Less Than or Equal To
// let num = 20;
// let num2 = 20;
// let testNumberEquality = num === num2;
// let testNumberInequality = num === 10 ;
// console.log(testNumberEquality);
// console.log(testNumberInequality);
// let testNumber_Equality = num !== num2;
// let testNumber_Inequality = num !== 10 ;
// console.log(testNumber_Equality);
// console.log(testNumber_Inequality);
// //Greater than
// let num$ = 10;
// let num_$ = 20;
// let testNum$ = num_$ > num$;
// let testNum_$ = num$ > num_$;
// console.log(testNum$);
// console.log(testNum_$);
// //less than
// let testNum$less = num_$ < num$;
// let testNum_$less = num$ < num_$;
// console.log(testNum$less);
// console.log(testNum_$less);
// //Greater than is equal
// let testNum$Equal = num_$ >= num$;
// let testNum_$Equal = num$ >= num_$;
// console.log(testNum$Equal);
// console.log(testNum_$Equal);
// //less than is equal
// let testNum$lessEqual = num_$ <= num$;
// let testNum_$lessEqual = num$ <= num_$;
// console.log(testNum$lessEqual);
// console.log(testNum_$lessEqual);
// // Tests Using "and" and "or" Operators
// let num = 20;
// //And Operator 
// let testAndTrue = (num > 15) && (num < 25);
// let testAndFalse = (num > 15) && (num > 25);
// console.log(testAndTrue);
// console.log(testAndFalse);
// //OR Operator
// let testOrTrue = (num > 15) || (num > 25);
// let testOrFalse = (num < 15) || (num > 25);
// console.log(testOrTrue);
// console.log(testOrFalse)
// Test Whether an Item is in an Array
var array = [1, 2, 3, 4, 5];
var testarrayTrue = array.includes(3);
var testarrayFalse = array.includes(4);
console.log(testarrayTrue);
console.log(testarrayFalse);
console.log(array);
