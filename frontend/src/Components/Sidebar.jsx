import React from 'react'
import {assets} from '../assets/assets'
function Sidebar() {
  return (
    <div className='w-[25%] h-full text-white p-2 flex-col gap-2 hidden lg:flex'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
            <div className='flex gap-3 items-center pl-8 cursor-pointer'>
                <img className='w-10' src={assets.home_icon} alt=''/>
                <p className='font-bold'>Home</p>
            </div>
            <div className='flex gap-3 items-center pl-8 cursor-pointer'>
                <img className='w-10' src={assets.search_icon} alt=''/>
                <p className='font-bold'>search</p>
            </div>
        </div>
        <div className='bg-[#121212] h-[85%] rounded'> 
          <div className='flex p-4 items-center justify-between'>
            <div className='flex gap-3 items-center'>
                <img className='w-8' src={assets.stack_icon} alt=''/>
                 <p className='semi-bold'>Your Library</p>
            </div>
            <div className='flex gap-3'>
                <img className='w-8' src={assets.arrow_icon} alt=''/>
                <img className='w-8' src={assets.plus_icon} alt=''/>
            </div>
          </div>
          <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'> 
            <h1>Create You are First Playlist</h1>
            <p className='font-light'>it's Easy We Will help you</p>
            <button className='bg-white rounded-full px-4 py-3 mt-6 p-4 text-[15px] text-black'>Create Playlist</button>
          </div>
          <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'> 
            <h1>Let's Find Some podcast to follow</h1>
            <p className='font-light'>We'll keep you update on new episode</p>
            <button className='bg-white rounded-full px-4 py-3 mt-6 p-4 text-[15px] text-black'>Browse Podcast</button>
          </div>
        </div>
    </div>
  )
}

export default Sidebar
