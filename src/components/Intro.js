import React from 'react'

const Intro = () => {
  return (
    
        <div className="flex mt-5 items-center gap-20 sm:gap-10 justify-between sm:flex-col">
            <div>
                <h1 className='text-9xl sm:text-5xl text-primary font-bold'>Job</h1>
                <h1 className='text-9xl sm:text-5xl text-secondary font-bold'>Hiring</h1>
                <div className="flex gap-10 mt-10 items-center">
                    <h1 className='text-xl text-gray-300'>Join Us to Find a Valuable Job</h1>
                    <button className='bg-primary p-2 rounded text-white cursor-pointer'>Get Started</button>
                </div>
            </div>
            <div>
                <img
                src="https://img.freepik.com/free-vector/men-success-laptop-relieve-work-from-home-computer-great_10045-646.jpg?w=740&t=st=1659194063~exp=1659194663~hmac=61dbc92c4268555d68c1f6bdf586830a497437bb2daf313135d1404841919c21"
                alt=""
                className="h-[600px] sm:h-[400px]"
                />
            </div>
        </div>
  )
}

export default Intro