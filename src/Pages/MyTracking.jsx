import React from 'react'
import { NavLink } from 'react-router-dom'

const MyTracking = () => {
  return (
    <div className="hero  p-[5%]  max-sm:bg-[--bgc] text-primary  ">
  <div className="hero-content flex-col lg:flex-row gap-10">
    <img className="max-w-sm lg:w-[50%] rounded-lg shadow-2xl" 
    src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" 
    alt='img'
    />
    <div className='text-[--color] w-[90%] '>
      <h1 className="text-3xl font-bold max-sm:text-md">Don't have an account yet? Sign Up now</h1>
      <p className="py-6 max-sm:text-sm ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary"><NavLink to='/signup'>Get Started</NavLink></button>
    </div>
  </div>
</div>
  )
}

export default MyTracking