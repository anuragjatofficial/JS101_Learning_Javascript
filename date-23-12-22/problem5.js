// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let username_new = "anuragjatofficial";
let password_new = "starlight";
let username = "anuragjatofficial"
let password = "starlight";
if (username_new == username) {
  if (password_new == password) {
    console.log("User can login")
  }
  else{
    console.log("Incorrect password");
  }
}
else{
  console.log("Incorrect username");
}