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

// const orderFood = new Promise((resolve, reject) => {
//     const foodReady = true;

//     setTimeout(() => {
//         if (foodReady) {
//             resolve(" Food delivered!");
//         } else {
//             reject(" Order cancelled");
//         }
//     }, 3000);
// });

// orderFood
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));

    //async await promise combined example

    function orderfood(){

        return new Promise((resolve, reject)=>{
            console.log("ordering food");
            setTimeout(()=>{
                const foodReady= true;
             if(foodReady){
                resolve("food is ready")

             }else{
                reject("food order failed");
             }
            },3000)
        })

    }
    

    async function eatFood(){
        console.log("waiting for food");
        try{
            const result = await orderfood();
        console.log(result);
        console.log("eating food;")
        }catch(error){
            console.log(error)
        }
        
    }
    eatFood()