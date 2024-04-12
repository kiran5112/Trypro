import React from 'react'
import { Link } from 'react-router-dom'

function Bunch() {
  return (
    <div>
        <Link to='/home'>HOME</Link>
        <Link to='/error'>ERROR</Link>
        <Link to='/about'>About</Link>

    </div>
  )
}

export default Bunch;