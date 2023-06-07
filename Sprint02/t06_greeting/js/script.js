let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");

if (isNaN(firstName) && isNaN(lastName)) {
  if (firstName.charAt(0) !== firstName.charAt(0).toUpperCase()) {
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  }
  
  if (lastName.charAt(0) !== lastName.charAt(0).toUpperCase()) {
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  }
  
  let fullName = firstName + " " + lastName;
  alert("Hello, " + fullName + "!");
  console.log("Hello, " + fullName + "!");
} 
else {
  alert("Wrong input!");
  console.log("Wrong input!");
}
