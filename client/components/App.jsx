import React, { useState, useEffect } from 'react'

import {getMemes} from '../apiClient'

function App() {
  const[memes,setMemes] = useState(' ')
  
  useEffect(() => {
    getMemes()
    .then((newMeme) => {
      console.log('newMeme',newMeme)
      setMemes(newMeme)
    })
    .catch((err) => {
      console.error(err.message)
    })
  
    .catch((err) => {
      console.error(err.message)
    })
   
  },[])
  
  const handleClick=()=> {
  setMemes(memes)
  } 
  return (
    <>    
    <div>   
      <h1> Memes</h1>
     
       {/* <button onClick={handleClick}> Click Me!!</button> */}
       <button onClick={handleClick}>Click Me!!!!</button>

       <img src={memes} width='600px'></img>
    

  
    </div>
    </>
  
  )  
}
 
 
export default App


    