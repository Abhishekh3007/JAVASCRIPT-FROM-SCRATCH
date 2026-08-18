
import './card.css'
import GrandChild from './grandChild'
import {useContext} from 'react'
import userContext from './usecontext'

const Card = (props) => {
 const user = useContext(userContext);
  return (
    
    <div className="profile">
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
        <p className="name"><h2>{props.name}</h2>
        <h4>Software Engineer & Devops </h4>
        </p>
        <img className='img' src={props.img} />
        
        <p className="about">{props.desc}</p>   
         <h1>{props.children}</h1>
        <GrandChild  data={props.data}/>
        
    
      
    </div>
  )
}

export default Card

