console.log("Hello can anyone hear me??");
let secondTry = document.getElementsByClassName("content")[0];
// this logs the entire line including the <div> brackets
let secondTryClean = document.getElementsByClassName("content")[0].innerHTML;
// this only logs the text inside the html. INNER html.
console.log(secondTry);
console.log(secondTryClean);
