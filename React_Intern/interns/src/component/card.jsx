
import './card.css'

const card = (props) => {
  return (
    <div className="profile">
        <p className="name"><h2>{props.name}</h2>
        <h4>Software Engineer & Devops </h4>
        </p>
        <img className='img' src={props.img} />
        
        <p className="about">{props.desc}</p>    
      
    </div>
  )
}

export default card

