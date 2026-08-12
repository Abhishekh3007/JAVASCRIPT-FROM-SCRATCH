
import './card.css'
import GrandChild from './grandChild'
//child component

const card = (props) => {
  return (
    <div className="profile">
        <p className="name"><h2>{props.name}</h2>
        <h4>Software Engineer & Devops </h4>
        </p>
        <img className='img' src={props.img} />
        
        <p className="about">{props.desc}</p>    
        <GrandChild  data={props.data}/>
      
    </div>
  )
}

export default card

