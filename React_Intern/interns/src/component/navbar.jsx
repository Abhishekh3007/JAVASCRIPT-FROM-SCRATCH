import {NavLink} from 'react-router-dom'
import './navbar.css'
const navbar = () => {
  return (
    <div>
        <ul>
        <ul className='nav'>
          <li><NavLink to='/'  className="nava" className={isActive => isActive ? 'active' : ''} >Home</NavLink></li>
          <li><NavLink to='/about' className="navlink">About</NavLink></li>
          <li><NavLink to='/contact' className="navlink">Contact</NavLink></li>
          <li><NavLink to='/login' className="navlink">Login</NavLink></li>

        </ul>
      </ul>
    </div>
  )
}

export default navbar
