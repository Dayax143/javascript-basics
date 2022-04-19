let age = 30;
let userName = 'Abdi';
let hoppies = ['Reading', 'Writing',  'Sports'];
let job = {
    title: 'Developer',
    location: 'Hargeisa',
    salary: 5000
};

// alert(userName);
// alert(age);
// alert(hoppies[1]);
// alert(job.salary);
// age = 45; 
// let adultYear = age - 15;
// alert(adultYear);

// let adultYear; 

// function calculateAdultYear() {
//     adultYear = age - 15;
// }

// calculateAdultYear();
// alert(adultYear);

// age = 45;
// calculateAdultYear();

// alert(adultYear);

// let totalAdultYears; 

// function calculateAdultYears() {
//     return age - 15;
// }

// totalAdultYears = calculateAdultYears();
// alert(totalAdultYears);

// age = 45; 
// totalAdultYears = calculateAdultYears();

// alert(totalAdultYears);

// let totalAdultYears;

// function calculateAdultYears(userAge) {
//     return userAge - 15;
// }

// totalAdultYears = calculateAdultYears(age);
// alert(totalAdultYears);

// age = 60; 
// totalAdultYears = calculateAdultYears(age);
// alert(totalAdultYears);

// // another example of function Paramaters 

// function example(parameter) {
//     alert(parameter);
// }

// const argument  = 'FFU';

// example(argument);

// let person = {
//     name: 'Abdirisak', // Property
//     greet() {  // Method
//         // alert('Hello!');
//         console.log('Hello!');
//     }
// };

// person.greet();


const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);

// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]


// function changeColor(newColor) {
//     var elem = document.getElementById('para');
//     elem.style.color = newColor;
//   }

  
// function addList(newItem){
//     var elem=document.getElementById('');
//     elem.style.color=newItem;
// }