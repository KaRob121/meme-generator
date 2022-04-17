import React from 'react'
import memesData from '../memesData.js'

function Meme() {
  const [memeImage, setMemeImage] = React.useState("")

  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeImage(memesArray[randomNumber].url)
  }

  return (
    <main>
      <div className="form">
        <input 
          className="form--input"
          type="text"
          placeholder="Top text"
        />
        <input 
          className="form--input"
          type="text"
          placeholder="Bottom text"
        />
        <button className="form--button" onClick={ getMemeImage }>Get a new meme image 🖼️</button>
      </div>
      <img 
        className="meme-image"
        src={ memeImage }
      />
    </main>
  )
}

export default Meme