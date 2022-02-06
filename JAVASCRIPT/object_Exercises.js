// Part 6 - Objects Exercise

////////////////////
// PROBLEM 1 //////
//////////////////

// Given the object:
var employee = {
    name: "John Smith Jane",
    job: "Programmer",
    age: 31
  }
  
  // Add a method called nameLength that prints out the
  // length of the employees name to the console.
  
//Solution
function nameLength(){
  // return (employee["name"].length);
  console.log(employee["name"].length);
}



  ///////////////////
  // PROBLEM 2 /////
  /////////////////
  
  // Given the object:

  
  // Write program that will create an Alert in the browser of each of the
  // object's values for the key value pairs. For example, it should alert:
  
  // Name is John Smith, Job is Programmer, Age is 31.
 
  function popAlert(){
    console.log("Name is "+employee["name"]+", Job is "+employee["job"]+", Age is "+employee["age"]);
  }

  
  ///////////////////
  // PROBLEM 3 /////
  /////////////////
  
  // Given the object:

  
  // Add a method called lastName that prints
  // out the employee's last name to the console.
  
  // You will need to figure out how to split a string to an array.
  // Hint: http://www.w3schools.com/jsref/jsref_split.asp

  function lastName(){
    
    var splitName=employee["name"].split(" ");
    console.log(splitName[splitName.length-1]);
  }

  var start= prompt("would you like to start the App ? (y/n)")
  action="default"
if( start === 'y'){
  while(action != 4){
    var action = prompt("What action to perform?\n1.Print Name Length\n2.Employee Summary\n3.Last Name\n4.Quit!\n Select Any One")
    if(action == 1){
      nameLength();
    }
    else if(action == 2){
      popAlert();
    }
    else if(action == 3){
      lastName();
    }
    else{
      alert("Please reload the application to start over!")
    }
  } 
}
  