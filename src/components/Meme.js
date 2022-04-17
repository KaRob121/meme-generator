import React from 'react'
import memesData from '../memesData.js'

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
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
        src={ meme.randomImage }
      />
    </main>
  )
}

export default Meme