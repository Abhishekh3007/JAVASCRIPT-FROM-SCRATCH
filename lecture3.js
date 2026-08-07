
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

bank_b(); 


//hoisting