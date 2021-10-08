import React from 'react'
import {all} from '../asset/music';
import { ContextSong } from '../App'; 
export const ListMusic = () => {
    const { CurrentSong, setCurrentIndex } = React.useContext(ContextSong);
    
    return (
        <div  className='list_contain' id='list_container'>
            {all.map(song => (
                <div 
                    key={song.id} 
                    className={`music_item ${ CurrentSong.id === song.id ? 'active' : ''} `}
                    onClick={()=> setCurrentIndex(all.findIndex(i => i.id === song.id)) }    
                >
                    <img src={song.image} alt='Null'/>
                    <div>
                        <h5>{song.name}</h5>
                        <p>{song.singer}</p>
                    </div>    
                    <div>
                        </div>             
                </div>
            ))}

            
        </div>
    )
}
