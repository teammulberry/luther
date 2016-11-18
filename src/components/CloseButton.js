import React from 'react'
import { Link } from 'react-router'

const CloseButton = ({
  color
}) => {
  return (
    <div className='absolute top-1-4 left-1'>
      <Link
        to='/'
        className={color + ' pv1 ph2 w-100 br2 white no-underline'}>
        Home
      </Link>
    </div>
  )
}

export default CloseButton
