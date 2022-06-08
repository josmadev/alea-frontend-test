import React from 'react'
import { useAuthContext } from '../../contexts/authContext'

const Navbar = () => {
  const { user } = useAuthContext()

  return (
    <header className='headerContainer'>
      
    </header>
  )
}

export default Navbar