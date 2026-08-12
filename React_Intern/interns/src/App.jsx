import Card from './component/card'
import './App.css'
import  one from './assets/abc.png'
import  two from './assets/abd.png'
import  three from './assets/abb.jpg'


function App() {


  return (
    <>

     <Card   name={"Abhishekh"}  img={one}  desc={"Hello I am Abhishek wali , I am a software engineer and devops engineer"}/>
     <Card   name={"Akshay"}  img={two}  desc={"Hello I am Akshay , I am a software engineer"}/>
     <Card   name={"Pradyumana"}  img={three}  desc={"Hello I am Pradyumana , I am a devops engineer"}/>

    </>
  )
}

export default App
