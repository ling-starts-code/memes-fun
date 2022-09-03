import React, { useState, useEffect } from 'react'

import {getMemes} from '../apiClient'

function App() {
  const[memes,setMemes] = useState([ ])
  
  useEffect(() => {
    getMemes()
    .then((memeImg) => {
      console.log(memeImg)
      setMemes(memeImg)
    })
    // .then(()=> {return (memes[Math.floor(Math.random()*memes.length)])})
    .catch((err) => {
      console.error(err.message)
    })
   
  },[])
  
  return (
    <>    
    <div>   
      <h1> Memes</h1>

      {memes.map((obj,i)=>{
        return ( <img src={obj.url}></img>)
      })}
        
    </div>
    </>    
  )  
}
  {/* <h1> Memes{console.log(memes[0].image)}</h1> */}

   // return( i===randomNum,
        //   <img src={item.url}/>
        // )

 // getRandomeMeme()
    // .then((randomMemeData) => {
    //   console.log('randomMemeData',randomMemeData)
    //   setRandomMeme(randomMemeData)
    // })
    // const randomMeme = memes[Math.floor(Math.random()*memes.length)]

  // const getRandomeMeme =(memes) => { 
  //   return memes[Math.floor(Math.random()*memes.length)]

  // }
  
{/* <li key ={i}>
          Image:<a href={obj.url} target='blank'> memememem </a>

        </li> */}
export default App
