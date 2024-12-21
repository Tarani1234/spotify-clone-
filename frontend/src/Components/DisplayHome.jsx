import React from 'react'
import Navbar from './Navbar'
import {albumsData} from '../assets/assets'
import AlbumItem from './AlbumItem'
import { songsData } from '../assets/assets'
import Songsitem from './Songsitem'
function DisplayHome() {
  return (
    <>
     <Navbar/>
     <div className='mb-4'>
       <h1 className='my-5 text-2xl font-bold'>Featured Charts</h1>
       <div className='flex overflow-auto'>
        {albumsData.map((item, index)=>(<AlbumItem key={index} image={item.image} desc={item.desc} id={item.id} name={item.name}/>))}
       </div>
     </div>
     <div className='mb-4'>
       <h1 className='my-5 text-2xl font-bold'>Today's Biggest Hit</h1>
       <div className='flex overflow-auto'>
        {songsData.map((data, index) =>(<Songsitem key={index} image={data.image} desc={data.desc} name={data.name} id={data.id}/>))}
       </div>
     </div>
    </>
  )
}

export default DisplayHome
