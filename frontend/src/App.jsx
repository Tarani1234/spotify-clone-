import React, { useContext} from 'react'
import './index.css'
import Sidebar from './Components/Sidebar'
import Player from './Components/Player'
import Display from './Components/Display'
import { PlayerContext } from './Context/Playercontext'




function App() {

   const {audioRef, track} = useContext(PlayerContext);
   const file = track?.file;
  return (
    <div className='h-screen bg-black'> 
       <div className='h-[90%] flex'>
         <Sidebar/>
         <Display/>
       </div>
       <Player/>
       <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App
