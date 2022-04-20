// let age = 30;
// let userName = 'Abdi';
// let hoppies = ['Reading', 'Writing',  'Sports'];
// let job = {
//     title: 'Developer',
//     location: 'Hargeisa',
//     salary: 5000
// };

// alert(userName);
// alert(age);
// alert(hoppies[1]);
// alert(job.salary);
// age = 45; 
// let adultYear = age - 15;
// alert(adultYear);
//////////////////////////////////////////////////////////////////////////////////
// let adultYear; 

// function calculateAdultYear() {
//     adultYear = age - 15;
// }

// calculateAdultYear();
// alert(adultYear);
/////////////////////////////////////////////////////////////////////////////////
// age = 45;
// calculateAdultYear();

// alert(adultYear);

// let totalAdultYears; 

// function calculateAdultYears() {
//     return age - 15;
// }

// totalAdultYears = calculateAdultYears();
// alert(totalAdultYears);
////////////////////////////////////////////////////////////////////////////////
// age = 45; 
// totalAdultYears = calculateAdultYears();

// alert(totalAdultYears);

// let totalAdultYears;

// function calculateAdultYears(userAge) {
//     return userAge - 15;
// }

// totalAdultYears = calculateAdultYears(age);
// alert(totalAdultYears);
////////////////////////////////////////////////////////////////////////////////////////////////////
// age = 60; 
// totalAdultYears = calculateAdultYears(age);
// alert(totalAdultYears);

// // another example of function Paramaters 

// function example(parameter) {
//     alert(parameter);
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////////////////////////////////////////
// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.push('cows');
// console.log(count);
// // expected output: 4
// console.log(animals);
// // expected output: Array ["pigs", "goats", "sheep", "cows"]

// animals.push('chickens', 'cats', 'dogs');
// console.log(animals);

// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

////////////////////////////////////////////////////////////////////////////////////////////////////////





//////////////////////////////////////////////////////////
// get element by id

// function changeColor(newColor) {
//     var elem = document.getElementById('para');
//     elem.style.color = newColor;
//   };
  
//   document.getElementById('add').onclick = function changeContent() {
      
//       document.getElementById('add').textContent = "Help me";
//     document.getElementById('add').style = "Color: red";
 
//  }
//  changeContent()

 
 
 
 
 ////////////////////////////////////////////////////////////
//  var element = document.createElement('div');
//  element.id = 'testqq';
//  var el = document.getElementById('testqq'); // el will be null!
 
 
 
 
 
 /////////////////////////////////////////////////////////////////
//  let log = document.getElementById('log');
 
//  document.onclick = inputChange;
 
// function inputChange(e) {
//     log.textContent = `Position: (${e.clientX}, ${e.clientY})`;
// }




///////////////////////////////////////////////////
let hoppy =['swimming','gaming','football'];

function addList(){
    var elem=document.getElementsByName(hoppy);
    elem.push('thhhhhhhhh');

    hoppy[3]='coding'
    alert(hoppy)
    // let addItems=mainGoals.push('CEO','Motivator')
    // alert (mainGoals[4]+"\n|| from latest command code")
}

addList()



function myFunction() {
let person = prompt("name", "job");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
  }
}