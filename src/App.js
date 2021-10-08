import './App.css';
import React from 'react';
import { Main } from './components/Main';
import { ListMusic } from './components/ListMusic';
import { all } from './asset/music/index'
import { Switch,Radio } from '@mui/material';

export const ContextSong = React.createContext()
function App() {
  const [darkMode, setDarkMode] = React.useState(false)
  const [pickColor,setPickColor] = React.useState('red')
  const [currentIndex, setCurrentIndex] = React.useState(0);
  React.useEffect((
    ()=>{
      document.body.classList.value= null
      if(darkMode){
        document.body.classList.add('dark')
      }else{
        document.body.classList.remove('dark')
      } 
      switch(pickColor){
        case 'red':
          document.body.classList.add('btnRed')
            break
        case 'green':
            document.body.classList.add('btnGreen')
            break
            case 'yellow':
            document.body.classList.add('btnYellow')
            break
        default:
            console.log('khong co mau')
      }
      // if(document.body.classList.length() = 2){
      //   delete document.body.classList[0]
      // }
    }
  ),[darkMode, pickColor])

  const ControlProps = (color, setTheme)=>({
    checked: pickColor === color,
    onChange: () => setPickColor(color),
    value:color,
    size:'small',
    sx:{
      color: setTheme,
      '&.Mui-checked': {
        color: setTheme,
      },
    }
  })
  
  return (
    <ContextSong.Provider value={{ currentIndex, setCurrentIndex, CurrentSong: all[currentIndex] }}>
      <main className='container'>
        <div className='container_head'>
          <Switch onChange={()=>setDarkMode(e => !e)} />
          <div>
            <Radio {...ControlProps('red','#e74c3c')}/> 
            <Radio {...ControlProps('green', '#2ecc71')} />
            <Radio {...ControlProps('yellow','#f1c40f')} />
          </div>
        </div>
        <Main/>
        <ListMusic/>
      </main>
    </ContextSong.Provider>
  );
}

export default App;