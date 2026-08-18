import {useContext} from 'react'
import userContext from './usecontext'

const useContext1 = () => {
    const user = useContext(userContext);
  return (
    <div>
        <h1>  {user.name}</h1>
        <h2>  {user.age}</h2>
      
    </div>
  )
}

export default useContext1
