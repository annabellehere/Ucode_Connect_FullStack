var animalName = prompt("What animal is the superhero most similar to?");
var gender = prompt("Is the superhero male or female? Leave blank if unknown or other.");
var age = prompt("How old is the superhero?");

var animalNameRegex = new RegExp("^[a-zA-Z]{1,20}$");
var genderRegex = new RegExp("^(male|female|)$", "i");
var ageRegex = new RegExp("^\\d{1,5}$");

if (!animalNameRegex.test(animalName) ||
    !genderRegex.test(gender) ||
    !ageRegex.test(age)) {
  alert("Invalid input. Please try again.");
} 
else {
  var description;
  
  if (gender.toLowerCase() === "male") {
    if (parseInt(age) < 18) {
      description = "boy";
    } else {
      description = "man";
    }
  } else if (gender.toLowerCase() === "female") {
    if (parseInt(age) < 18) {
      description = "girl";
    } else {
      description = "woman";
    }
  } else {
    if (parseInt(age) < 18) {
      description = "kid";
    } else {
      description = "hero";
    }
  }
  
  var superheroName = animalName + "-" + description;
  alert("The superhero name is: " + superheroName + "!");
}
