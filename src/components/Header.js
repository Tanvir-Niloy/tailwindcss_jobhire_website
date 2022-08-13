import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between p-5 shadow-md">
        <div className="flex gap-1">
            <h1 className='text-2xl text-primary font-bold'>Job<span className='text-secondary'>Finder</span></h1>
        </div>
        <button className='bg-primary p-2 rounded text-white cursor-pointer hover:scale-105'>Login or Signup</button>
    </div>
  )
}

export default Header