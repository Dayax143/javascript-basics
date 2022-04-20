// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course
// 2) Output ("alert") the three variable values
// 3) Try "grouping" the three variables together and still output their values thereafter
// 4) Also output the second element in your "main goals" variable
// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible 
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work 
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
// 6) Execute your custom command from (5) and output ("alert") the result






// proplem solution

let course='Web Development'
let price= 1500
let mainGoals=['Web Developer','Freelancer','Leadership']

alert(course+price+mainGoals+" \n|| reading 3 variables");

function dhamal(){
        alert(course+"\n|| from the first function \n\n"+price+"\n||  from the first function \n\n"+mainGoals+"\n|| from the first function")
        
}
dhamal()


alert(mainGoals[1] + "\n|| calling array variable by index:1")


function custom(){
        alert (mainGoals[2]+"\n|| from latest command code")
}
custom(mainGoals)


function dynamic() {
        let person=prompt("Enter the index of your goal :")
        if (person != null) {
          document.getElementById("solved").innerHTML =
          "Congratulations: " + mainGoals[person] + " is a good Goal, wish you to acheive recently.";
        }
        
      }

