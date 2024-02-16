import React from 'react'
import {Link} from 'react-router-dom'
const Backbutton = ({distination = '/'}) => {
  return (
    <Link to={distination}>back</Link>
  )
}

export default Backbutton