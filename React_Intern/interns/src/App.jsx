// import Card from './component/card'
import './App.css'
// import  one from './assets/abc.png'
// import  two from './assets/abd.png'
// import  three from './assets/abb.jpg'
import {useState,useEffect} from 'react';

//parent component
function App() {
let vari=1;
  //  const [first, setfirst] = useState(second)
  const [state,setState]=useState(2);

  function handbut(){
    setState(state+1);
    vari++;
    console.log(vari);
  }
   function handbut1(){
    setState(state-1);
    vari--;
  }
  //variation1
  useEffect(()=>{
        alert("hello guys")

        return ()=>{
        alert("done with above code  cleaning up")
        }


  },[state,vari]);



  return (
    <>

     {/* <Card   name={"Abhishekh"}  img={one}  desc={"Hello I am Abhishek wali , I am a software engineer and devops engineer"}/>
     <Card   name={"Akshay"}  img={two}  desc={"Hello I am Akshay , I am a software engineer"}/> */}
    {/* <Card   name={"Pradyumana"}  img={three}  desc={"Hello I am Pradyumana , I am a devops engineer"} data={"hello world"}/> */}
   
    <button onClick={handbut}>Increment</button>
    <button onClick={handbut1}>decrement</button>
    <h3>Count : {state}</h3>



    </>
  )
}

export default App
