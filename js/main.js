// USER LOGIN / SIGNUP
 let Users = []
// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');
let UsernameE1 = document.getElementById('usersignup')
let passwordE1 = document.getElementById('Userpassword')
let passwordC = document.getElementById('passwordC')
let usernameE2 = document.getElementById ('userlogin') 
let passwordE2 = document.getElementById ('passlogin') 

// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {
  Users.push(newuser(UsernameE1.value,passwordE1.value))
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
  console.log('Sign In Btn Clicked');
}

function newuser(username,password) {
  return {
  user: username,
  pass: password,
  }
}
console.log(Users)