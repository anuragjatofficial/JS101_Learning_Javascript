// Problem 1: Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties
let year_of_birth = 2004;
let age = 2022 - year_of_birth;
if ((age >= 13)&&(age <= 19)){
  console.log("Teenage");
}
else if ((age >= 20)&&(age <= 24)){
  console.log("Twenties");
}
else{
  console.log("your age is more than 29");
}