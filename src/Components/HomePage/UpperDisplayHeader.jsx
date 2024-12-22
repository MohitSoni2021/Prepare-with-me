import React from 'react'

const UpperDisplayHeaderComponent = () => {
  return (
      <div className='flex h-screen w-screen overflow-hidden bg-red-200'>
      
      <div className="w-1/2 flex justify-center flex-col items-center gap-10">
          <h1 className='text-8xl font-space-mono font-extrabold'>CODE_BASE</h1>
          <div className="text-3xl">
              <p>"Test Your Code, Master Your Skills!"</p>
          </div>
          <div className="">
              <button className="font-space-mono text-2xl py-3 px-10 bg-white rounded-md border-2 border-black solid-2px-black">Get Started</button>
          </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
          <img src="https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg?t=st=1734813649~exp=1734817249~hmac=19d2f632be1cd8d54692818bdd97744167b50ded0596d0fd078dacbe78293f26&w=826" alt="" />
      </div>

      </div>
  )
}

export default UpperDisplayHeaderComponent
