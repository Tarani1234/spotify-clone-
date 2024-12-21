import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";


export const PlayerContext = createContext();

const PlayerContextProvider = (props)=>{
        
  console.log("songs data is imported:", songsData);

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track, setTrack] = useState(songsData[0])
    const[playStatus, setPlayStatus] = useState(false)
    const[time, setTime] = useState({
       currentTime : {
        second: 0,
        minute: 0
       },
       totalTime:{
         second : 0,
         minute : 0
       }
    });
    console.log("initial Track:", track);
    console.log("initial play status", playStatus);

  const play = () =>{
     audioRef.current.play();
     setPlayStatus(true);
     console.log("audio is playing");
  }
  const pause = () =>{
    audioRef.current.pause();
    setPlayStatus(false);
    console.log('audio is paused');
  }
  
  const previous = async() =>{
        if(track.id > 0){
          await setTrack(songsData[track.id-1]);
          await audioRef.current.play();
          setPlayStatus(true);
        }
  }

  const next = async() =>{
     if(track.id < songsData.length - 1){
       await setTrack(songsData[track.id+1]);
       await audioRef.current.play();
       setPlayStatus(true);
       
     }
  }
  const seeksong = async(e)=>{
     audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration);
  }

  const playwithId = async(id) =>{
    console.log("playwithid SongId :", id );
     if(songsData && songsData[id]){
      console.log("selected song:", songsData[id]);
      setTrack(songsData[id]);
        if(audioRef.current){
          await audioRef.current.play();
           setPlayStatus(true);
           console.log('Audio is now playing')
        }
        else{
          console.log("Audio ref is not set");
        }
        
     }
     else{
      console.log("invalid song ID or songData is not available");
     }
  };
  
  useEffect(()=>{
     setTimeout(()=>{
        audioRef.current.ontimeupdate = () =>{
          seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%"
          setTime({
            currentTime : {
              second: Math.floor(audioRef.current.currentTime % 60),
              minute: Math.floor(audioRef.current.currentTime / 60)
             },
             totalTime:{
              second: Math.floor(audioRef.current.duration % 60),
               minute : Math.floor(audioRef.current.duration / 60)
             }
          })
        
        }
     }, 1000)
  }, [audioRef])
    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track,  setTrack,
        playStatus, setPlayStatus,
        time, setTime,
        play, pause,
        playwithId,
        previous, next,
        seeksong
      
    }
   
    
    return(
       <PlayerContext.Provider value={contextValue}>
         {props.children}
       </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;