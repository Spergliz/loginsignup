// USER LOGIN / SIGNUP
let Users = loadUser();
// HTML VARIABLES
let signInBtn = document.getElementById("sign-in-btn");
let signUpBtn = document.getElementById("sign-up-btn");
let UsernameE1 = document.getElementById("usersignup");
let passwordE1 = document.getElementById("Userpassword");
let passwordC = document.getElementById("passwordC");
let usernameE2 = document.getElementById("userlogin");
let passwordE2 = document.getElementById("passlogin");

// SIGN UP BTN CLICKED
signUpBtn.addEventListener("click", signUpHandler);

function signUpHandler() {
  
  if (indexofuser(UsernameE1.value) ===  -1 ) {
  Users.push(newuser(UsernameE1.value, passwordE1.value));
  saveusers();
  } else { alert("name already taken")
}
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener("click", signInHandler);

function signInHandler() {
  if (indexofuser(usernameE2.value) > -1) {
     if (indexofpass(passwordE2.value) > -1){ alert("signed in")
    }else {alert ("incorrect password or user")
  }
  } else { alert("incorrect password or user")}
}

function newuser(username, password) {
  return {
    user: username,
    pass: password,
  };
}
function saveusers() {
  localStorage.setItem("Users", JSON.stringify(Users));
}
function loadUser() {
  let userstr = localStorage.getItem("Users");
  return JSON.parse(userstr) ?? [];
}
console.log(Users);

function indexofuser(Username) {
  for (let i = 0; i < Users.length; i++) {
    if (Users[i].user === Username) {
      return i;
    }
  }
  return -1;
}
function indexofpass(password) {
  for (let i = 0; i < Users.length; i++) {
    if (Users[i].pass === password) {
      return i;
    }
  }
  return -1;
}
