import React from 'react'

const Navbar = () => {
  return (
    <div className='p-2 bg-amber-500/75 text-amber-950 flex justify-between px-10 lg:px-60 items-center w-full'>
      <div className="logo font-extrabold text-xl">iTasks</div>
        <ul className='flex gap-4 '>
            <li className='transform hover:scale-105 hover:font-bold cursor-pointer'>Home</li>
            <li className='transform hover:scale-105 hover:font-bold cursor-pointer'>About</li>
        </ul>
    </div>
  )
}

export default Navbar
