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




let course='Web2'
let price= 1000
let mainGoals=['Developer','Programmer','Database Admistrator','BackEnd Dev','FrontEnd Dev']

alert(course+' '+price+' '+mainGoals+" \n|| reading 3 variables");

function calling(){
        alert(course+"\n|| from the first function \n\n"+price+"\n||  from the first function \n\n"+mainGoals+"\n|| from the first function")
        
}
calling()


alert(mainGoals[1] + "\n|| calling array variable by index:1")


function dynamic() {
        let person=prompt('enter the goal by index')
        if (person != null) {
          document.getElementById("badal").innerHTML =
          "Congratulations: " + mainGoals[person];
        }

      }

