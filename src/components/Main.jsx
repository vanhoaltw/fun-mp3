import React from 'react'
import PlayMusic from './playMusic';
import { ContextSong } from '../App';

export const Main = () => {
    const CD =React.useRef()
    const { CurrentSong } = React.useContext(ContextSong)
    const [progress, setProgress] = React.useState(0);

    const callChange = (timing)=>{
        setProgress(timing)
    }
    React.useEffect(
        ()=>{
            CD.current.style.transform = 'rotate(' + progress*10 + 'deg )'    
        },[progress])
    return (
        <div className='_main_'>
            <h3>{CurrentSong.name}</h3>
            <p >[ {CurrentSong.singer} ]</p> 
            <div>
                <img ref={CD}   src={CurrentSong.image} alt="Italian Trulli" />            
            </div>           
            <PlayMusic func={callChange}/>           
        </div>
    )
}
