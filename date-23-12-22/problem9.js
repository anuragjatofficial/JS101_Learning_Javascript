// Problem 4: Given 3 numbers (all different values), print which is greatest
let a = 8;
let b = 545;
let c = 884;
if ((a>b) && (a>c)) {
  console.log(a,"is greator");
}
else if ((b>a) && (b>c)) {
    console.log(b,"is greator");
}
else if ((c>a) && (c>b)) {
    console.log(c,"is greator");
}
else{
  console.log("Invalid input");
}