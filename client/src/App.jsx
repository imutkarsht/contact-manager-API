import React from 'react'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <ul>
         <li><Link to={"/home"}>Home</Link></li>
         <li><Link to={"/signup"}>SignUp</Link></li>
         <li><Link to={"/login"}>Login</Link></li>
      </ul>
    </div>
  )
}

export default App   