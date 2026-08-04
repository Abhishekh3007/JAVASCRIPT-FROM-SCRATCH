// var a=10;//global scope
// var a=30;//global scope
// function  ab(){
//     a=20;
    
//     console.log(a);
// }
// console.log(a);
// ab();//var is banned by many developers

let a=10;//global scope

function ab(){
    a=30;
    console.log(a);//block scope
}
console.log(a);//10
ab();//30


const b=20;
console.log(b);//20