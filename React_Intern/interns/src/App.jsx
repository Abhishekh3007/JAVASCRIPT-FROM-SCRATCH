import Card from './component/Card'
// import './App.css'
// import  one from './assets/abc.png'
// import  two from './assets/abd.png'
// import  three from './assets/abb.jpg'
import UserContext1 from './component/useContext-1'  
import userContext from './component/usecontext'


//parent component
function App() {




  return (
    <>
    <userContext.Provider value={{name:"sachin",age:22}}>
     <UserContext1/>
      <Card/> 
       <Card/>
    </userContext.Provider>
 






    </>
  )
}

export default App
