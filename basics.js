// Basics of JS

// printing in console
console.log("hello")

//The best part of JS is that we can call a function before initalizing it 
// JS skims through whole code and assings a memory to each function and variables
// but this doesnt work on "var" ,"arrow functions" as it will return un defined 
// all this comes undera property of js called HOISTING  

console.log(s1)
var s1=10
multiply(2,4)
// creating a function 
function multiply(s1,s2){
    console.log(s1*s2)
}

// calling a function 
multiply(5,6)

// Types of assign a function

// 1) The normal way

function multiply(s1,s2){
    console.log(s1*s2)
}

// 2) setting a function to a varibale 

hello= function(){
    console.log("supp!")
}

// 3) Arrow function 

hello =()=> {
    // we can execute with and without return keyword
    return "sup";
    // "super";
}