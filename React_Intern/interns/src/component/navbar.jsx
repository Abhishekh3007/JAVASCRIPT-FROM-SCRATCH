import {NavLink} from 'react-router-dom'
import './navbar.css'
const navbar = () => {
  return (
    <div>
        <ul>
        <ul className='nav'>
          <li><NavLink to='/'  className={isActive => isActive ? 'active' : ''} >Home</NavLink></li>
          <li><NavLink to='/about' className={isActive => isActive ? 'active' : ''} >About</NavLink></li>
          <li><NavLink to='/contact' className={isActive => isActive ? 'active' : ''} >Contact</NavLink></li>
          <li><NavLink to='/login' className={isActive => isActive ? 'active' : ''} >Login</NavLink></li>

        </ul>
      </ul>
    </div>
  )
}

export default navbar
