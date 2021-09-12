// Assignment code here
var generatePassword = function() {
  var passwordLength = prompt("How long would you like your password to be?");
  if (passwordLength < 8 || passwordLength > 128 || passwordLength === null) {
    alert("Please choose a length between 8 and 128.");
    return generatePassword();
  }
  localStorage.setItem("Password length", passwordLength);

  var criteria = ["lowercase letters", "uppercase letters", "numbers", "special chracters"]

  for(var i = 0; i < criteria.length; i++) {
    var answer = confirm(`Would you like to include ${criteria[i]} in your password?`);
    if (answer === true || answer === false) {
      localStorage.setItem(criteria[i], answer);
    }
  };

  var fullPassword = function() {
    var result = "";

    var lowercaseConfirm = localStorage.getItem("lowercase letters")
    if (lowercaseConfirm === "true") {
      var lowercase = "abcdefghijklmnopqrstuvwxyz";
    } else {
      var lowercase = "";
    }

    var uppercaseConfirm = localStorage.getItem("uppercase letters")
    if (uppercaseConfirm === "true") {
      var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else {
      var uppercase = "";
    }

    var numbersConfirm = localStorage.getItem("numbers")
    if (numbersConfirm === "true") {
      var numbers = "123456789";
    } else {
      var numbers = "";
    }

    var specialCharsConfirm = localStorage.getItem("special chracters")
    if (specialCharsConfirm === "true") {
      var specialChars = "!@#$%&*";
    } else {
      var specialChars = "";
    };

    var list = (lowercase + uppercase + numbers + specialChars);
    if (list === "") {
      alert("Please select at least one criteria for the password.")
      return generatePassword();
    }
    console.log(list);
  }
}

  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);