import React, { useRef } from 'react'
import { Slider} from '@mui/material';
import { PauseCircleOutlined, SwapOutlined, StepBackwardOutlined, RetweetOutlined, PlayCircleOutlined, StepForwardOutlined } from '@ant-design/icons'
import {all} from '../asset/music/index'
import { ContextSong } from '../App'

export default function PlayMusic(props){
    const audioRef = useRef();
    const [play,setPlay] = React.useState(false);
    const [inter,setInter] = React.useState(true);
    const [ran,setRan] = React.useState(false);
    const [duration,setDuration] = React.useState(0);
    const [ maxTime, setMaxTime] = React.useState(0);
    const { currentIndex, setCurrentIndex, CurrentSong } = React.useContext(ContextSong);
    document.body.style.background = 'url(\'' + CurrentSong.image + '\') no-repeat  '
    document.body.style.backgroundSize = 'cover'


    // On timeline change
    const handleChangeDuration =(x)=>{
        audioRef.current.currentTime = x.target.value; 
        setDuration(x.target.value);        
    }

    // onTimeUpdate
    const handleTime =()=>{
        setDuration(audioRef.current.currentTime)
        props.func(audioRef.current.currentTime)
     }

    // onEndSong
    const handleEndSong = ()=> {
        if(inter){
            setCurrentIndex(e=>e+1)
        }else{
            if(ran){setCurrentIndex(e=> Math.floor((Math.random() * (all.length - 1))))}else{setPlay(true); audioRef.current.load()}
        }
    }

    // Change Song
    const handleToggleSong = (e)=>{
        if(e === 'up'){
            currentIndex < all.length -1 ?  setCurrentIndex(e => e + 1) : setCurrentIndex(0);
        }else if(e === 'down'){
            currentIndex > 0 ?  setCurrentIndex(e => e - 1) : setCurrentIndex(all.length-1)
        }
    }
    
    // On load song 
    const handleLoadedData = async()=>{  
        setMaxTime(audioRef.current.duration)
        if(play) audioRef.current.play()       
     };

    // Play / pause 
     const togglePlay = ()=>{
         setPlay(e => !e);
         !play ? audioRef.current.play() : audioRef.current.pause();
     }

     
    return(
        <div className='_main_wrap'  >
            <div className='_main_button_'>
                <button className={`${inter ? 'active': ''}`} onClick={() => {setInter(e => !e); setRan(false)}}>
                    <RetweetOutlined />
                </button>
                <button onClick={()=> handleToggleSong('down')}>
                    <StepBackwardOutlined />    
                </button>
                <button onClick={togglePlay}>
                    {!play ?  <PlayCircleOutlined />:<PauseCircleOutlined/> }
                </button>
                <button onClick={()=> handleToggleSong('up')}>
                    <StepForwardOutlined />
                </button>
                <button className={`${ran ? 'active': ''}`} onClick={()=> {setRan(e=>!e);setInter(false)}}>
                    <SwapOutlined />
                </button> 

            </div>
                <div>
                <Slider
                    size="small"
                    value={duration}
                    min={0}
                    max={maxTime}
                    onChange={handleChangeDuration}
                    className='_main_slider_'
                />
                </div>
                <audio
                    ref = {audioRef}
                    src= {CurrentSong.path}
                    onLoadedData = {handleLoadedData}
                    onTimeUpdate = {handleTime}
                    onEnded = {handleEndSong}
                />                   
        </div>
    )     
}