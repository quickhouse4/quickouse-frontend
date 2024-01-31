import React from 'react'

const Logout = () => {
  return (
    <div>
     window.localStorage.removeItem('token')      
    </div>
  )
}

export default Logout
