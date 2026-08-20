// import Card from './component/card'
import './App.css'
// import  one from './assets/abc.png'
// import  two from './assets/abd.png'
// import  three from './assets/abb.jpg'
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement,reset,incrementByAmount} from './features/counter/counterSlice'


//parent component
function App() {
  const count=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch()



  return (
    <>
     <button onClick={()=>dispatch(increment())}>+</button>
     <button onClick={()=>dispatch(decrement())}>-</button>
     <button onClick={()=>dispatch(reset())}>Reset</button>
     <button onClick={()=>dispatch(incrementByAmount(5))}>Increment by 5</button>

     <p>{count}</p>



    </>
  )
}

export default App
