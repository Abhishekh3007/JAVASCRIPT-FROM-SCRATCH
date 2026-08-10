// async function orderFood(){
//     // Simulate an API call or some async operation
//     return "food delivered"
   
// }



//await

// async function dilevery(){

//     const ab=await orderFood();
//     console.log(ab)
 
// }
// dilevery();



//asyn await


// function calculates_total(amt){
//     amt=amt+100;
//     return amt;

// }
// async function total_amount(amounts){
//     let abc=await calculates_total(amounts);
//     // console.log(abc)

// }
// total_amount(1000)

const orderFood = new Promise((resolve, reject) => {
    const foodReady = true;

    setTimeout(() => {
        if (foodReady) {
            resolve(" Food delivered!");
        } else {
            reject(" Order cancelled");
        }
    }, 3000);
});

orderFood
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

    //async await promise combined example