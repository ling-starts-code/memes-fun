import React, { useState, useEffect } from 'react'

import {getMemes} from '../apiClient'

function App() {
  const[memes,setMemes] = useState(' ')
  const[meme,setMeme] = useState(' ')
  
  useEffect(() => {
    getMemes()
    .then((newMeme) => {
      console.log('newMeme',newMeme)
      setMemes(newMeme)
    })
    .catch((err) => {
      console.error(err.message)
    })   
  },[])
  
  const handleClick=()=>{  
    let randomNum =Math.floor(Math.random()*memes.length)
    setMeme(memes[randomNum].url)  
  }
  return (
    <>    
    <div>   
      <h1> Memes</h1>
       <button onClick={handleClick}>Click Me!!!!</button>
       <img src={meme} width='600px'/>
    </div>
    </> 
  )  
}
export default App


    