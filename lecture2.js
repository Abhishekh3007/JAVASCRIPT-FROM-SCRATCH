//loops
// for(let i=0;i<10;i++){
//     console.log(i);
// }
// let i=5;
// while(i>0){
//     console.log("infinite loop");
//     console.log(i);
//     i--;
// }

// let i=5;
// do{
//     console.log(i);
//     i--;
// } while(i>0);
// let arr=["a","b","c","d"];

// // for(arrs of arr){
// //     console.log(arrs);
// // }   
// obj={
//     name:"abc",
//     age:"24",
//     city:"xyz"
// }
// for (let key in obj){
//     // console.log(key);
//     console.log(obj[key]);
// }

//---------------------------------------------------------
//conditional statments
// let age=17;
// if(age>18){
//     console.log("eligible for voting"); 
// }else{
//     console.log("not eligible for voting");
// }


// if(age>18){console.log("eligible for voting")}
// else if(age>16){console.log("partially eligible")}
// else{console.log("not eligible for voting")}

// switch(new Date().getDay()){
//     case 0:
//         console.log("sunday");
//         break;
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//         case 3:
//             console.log("wednesday");
//             break;
//     default:
//         console.log("not a valid day");
//         break;

// }
//---------------------------------------------------------
//arithmatic operators
//  console.log(10+20);//30
//  console.log(10-20);
//   console.log(10*20);
//   console.log(10/20);
//   console.log(10%0);

//asignment operators

// let a=10;
// let b=20;
// a +=20;
// b +=20


// a-=10;
// b-=10;
// //logical operators

// //!=
// //==,===
// //&&
// // ||
// if(a !=b && a>b){
//     console.log("a is not equal to b and a is greater than b");
// }


// clases

// class student{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     study(){

//         console.log(this.name+" is studying");
//         console.log(this.age+" is my age");
//     }
// }
// let s1=new student("abc",24);
// s1.study();


// class teacher extends student{
//     constructor(name,age,subject){
//         super(name,age);
//         this.subject=subject;
//     }
//      teaching(){console.log(this.name+" is teaching "+this.subject)}
//    studying(){
//     super.study();
//     console.log("hello polymorphism")
//    }
nction
     
// }
// let s2=new teacher("xyz",30,"maths");
// // s2.study();
// // s2.teaching();
// s2.studying();


//----------------------------------
//functions


// fu ab(name){
//     console.log("hello"+name);
// }
// ab("abc");

//iife 
// (function name(){
//     console.log("hello");
// })()

//arrow function
// let ab=(age)=> {
//     console.log("hello"+age);

// }
// ab(12)
