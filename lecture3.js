
//closure with eamples 

function outer(){
   let count =0;//line 2
   function inner(){
    count++;
    return count;
   }
   
   return inner;
}

// let fun_holder=outer();
// console.log(fun_holder());
// console.log(fun_holder());
// console.log(fun_holder());
// console.log(fun_holder());
// console.log(fun_holder());



function bank(){
    let balance =100
    function checkbalance(){
        console.log(balance);
        return balance;
    }
    balance +=50;
    return checkbalance;


}
let bank_b=bank();

// bank_b(); 


//hoisting(temporial dead zone)

// console.log(ex);
// var ex=5;

// console.log(exx)
// let exx=10;


// ab();
// function ab(){
//     console.log("hello ")
// }
// let fun=abc();
// function abc(){
//     console.log("hello world")
// }


//--------------------------------------
//sync program

// console.log("begin");
// for(let i=0;i<1000000000000;i++){
// }
// console.log("end");
//async program
console.log("begin");
setTimeout(()=>{
    console.log("fetched in side the async pgm")
},6000)

console.log("end");