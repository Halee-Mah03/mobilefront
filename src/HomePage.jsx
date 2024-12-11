import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-00 to-gray-900 h-screen  p-9 flex-col justify-center font-[sans-serif] overflow-hidden">
      <div className="grid md:grid-cols-2 justify-center items-center max-md:text-center md:gap-8 gap-16 h-full">
        <div className="md:max-w-md mx-auto">
          <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-6 md:!leading-[55px]">WELCOME TO THE BANK</h2>
          <p className="text-white font-extrabold">We offer seamless and secured bank transactions</p>
          <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore voluptate, nemo suscipit iure obcaecati aut voluptates perferendis, ullam exercitationem officiis maiores error consequuntur quas aspernatur similique quis libero illo debitis.</p>
          <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore voluptate, nemo suscipit iure obcaecati aut voluptates perferendis, ullam exercitationem officiis maiores error consequuntur quas aspernatur similique quis libero illo debitis.</p>
          <div className="mt-7">
            <button type="button" onClick={() => {navigate ('/login')}}
              className="px-5 py-2 text-base tracking-wider font-semibold outline-none border border-white bg-white text-gray-500 hover:bg-transparent hover:text-white transition-all duration-300">Get Started</button>
          </div>
        </div>
        <div className="md:text-right">
          <img src="https://media.istockphoto.com/id/640267784/photo/bank-building.jpg?s=612x612&w=0&k=20&c=UTtm4t6WR-MLwO6ATq5l6n3SoCc6HpaClEFZMxO1Nek=" alt="the bank" className="object-cover w-full h-96" />
        </div>
      </div>
    </div>
  )
}

export default HomePage